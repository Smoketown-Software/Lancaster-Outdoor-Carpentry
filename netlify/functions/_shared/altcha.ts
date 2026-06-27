import { getStore } from '@netlify/blobs'
import { verifySolution } from 'altcha-lib'
import { deriveKey } from 'altcha-lib/algorithms/pbkdf2'
import type { Payload } from 'altcha-lib/types'

type VerificationResult =
  | { ok: true }
  | { ok: false; message: string }

function parsePayload(value: unknown): Payload | null {
  if (typeof value !== 'string' || value.trim() === '') {
    return null
  }

  try {
    return JSON.parse(Buffer.from(value, 'base64').toString('utf8')) as Payload
  } catch {
    return null
  }
}

export async function verifyAltchaPayload(
  payloadValue: unknown,
  hmacSignatureSecret: string,
): Promise<VerificationResult> {
  const payload = parsePayload(payloadValue)

  if (!payload?.challenge?.signature || !payload.solution) {
    return { ok: false, message: 'Please complete the human verification.' }
  }

  const store = getStore({ name: 'contact-altcha', consistency: 'strong' })
  const replayKey = `altcha:${payload.challenge.signature}`
  const existing = await store.get(replayKey)

  if (existing) {
    return { ok: false, message: 'Please complete the human verification again.' }
  }

  const result = await verifySolution({
    challenge: payload.challenge,
    solution: payload.solution,
    deriveKey,
    hmacSignatureSecret,
  })

  if (!result.verified) {
    return { ok: false, message: 'Please complete the human verification.' }
  }

  await store.setJSON(replayKey, {
    usedAt: new Date().toISOString(),
  })

  return { ok: true }
}
