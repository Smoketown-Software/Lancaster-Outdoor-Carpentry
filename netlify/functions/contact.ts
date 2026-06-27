import type { Config, Context } from '@netlify/functions'
import { verifyAltchaPayload } from './_shared/altcha'
import { getEnv, getRequiredEnv } from './_shared/env'
import { isRateLimited } from './_shared/rate-limit'
import { jsonResponse, methodNotAllowed } from './_shared/responses'

type ContactSubmission = {
  name?: unknown
  email?: unknown
  phone?: unknown
  service?: unknown
  message?: unknown
  website?: unknown
  altcha?: unknown
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function stringValue(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function validateSubmission(payload: ContactSubmission) {
  const name = stringValue(payload.name)
  const email = stringValue(payload.email)
  const phone = stringValue(payload.phone)
  const service = stringValue(payload.service)
  const message = stringValue(payload.message)
  const website = stringValue(payload.website)

  if (website) {
    return { ok: false as const, message: 'Unable to send your message.' }
  }

  if (name.length < 2 || name.length > 100) {
    return { ok: false as const, message: 'Please enter your name.' }
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 255) {
    return { ok: false as const, message: 'Please enter a valid email address.' }
  }

  if (message.length < 10 || message.length > 5000) {
    return { ok: false as const, message: 'Please share a few more details about your project.' }
  }

  return {
    ok: true as const,
    formData: {
      name,
      email,
      phone,
      service,
      message,
      website: '',
    },
  }
}

async function parseRequest(req: Request): Promise<ContactSubmission | null> {
  try {
    return await req.json() as ContactSubmission
  } catch {
    return null
  }
}

export default async (req: Request, context: Context) => {
  if (req.method !== 'POST') {
    return methodNotAllowed()
  }

  const payload = await parseRequest(req)

  if (!payload) {
    return jsonResponse({ ok: false, message: 'Unable to read your message.' }, 400)
  }

  const validated = validateSubmission(payload)

  if (!validated.ok) {
    return jsonResponse({ ok: false, message: validated.message }, 400)
  }

  try {
    const hmacSignatureSecret = getRequiredEnv('ALTCHA_HMAC_SECRET')
    const hmacKeySignatureSecret = getRequiredEnv('ALTCHA_HMAC_KEY_SECRET')
    const relaySecretKey = getRequiredEnv('RELAY_SECRET_KEY')
    const relayUrl = getEnv('SMOKETOWN_RELAY_URL', 'https://smoketownsoftware.com/api/relay')
    const clientEmail = getEnv('CLIENT_EMAIL', 'lancasteroutdoorcarpentry@gmail.com')
    const clientId = getEnv('CLIENT_ID', 'lancaster-outdoor-carpentry')
    const siteName = getEnv('CLIENT_SITE_NAME', 'Lancaster Outdoor Carpentry')
    const subject = getEnv('EMAIL_SUBJECT', 'New Lancaster Outdoor Carpentry inquiry')

    const altchaResult = await verifyAltchaPayload(
      payload.altcha,
      hmacSignatureSecret,
      hmacKeySignatureSecret,
    )

    if (!altchaResult.ok) {
      return jsonResponse({ ok: false, message: altchaResult.message }, 400)
    }

    if (await isRateLimited(context.ip)) {
      return jsonResponse({ ok: false, message: 'Please wait a few minutes before sending another message.' }, 429)
    }

    const relayResponse = await fetch(relayUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-relay-auth': relaySecretKey,
      },
      body: JSON.stringify({
        client_email: clientEmail,
        client_id: clientId,
        site_name: siteName,
        subject,
        form_data: validated.formData,
      }),
    })

    if (!relayResponse.ok) {
      const relayBody = await relayResponse.text()
      console.error('Smoketown relay rejected contact submission:', relayResponse.status, relayBody)
      return jsonResponse({ ok: false, message: 'Unable to send your message right now.' }, 502)
    }

    return jsonResponse({ ok: true })
  } catch (error) {
    console.error('Contact submission failed:', error)
    return jsonResponse({ ok: false, message: 'Unable to send your message right now.' }, 500)
  }
}

export const config: Config = {
  path: '/api/contact',
  method: ['POST'],
}
