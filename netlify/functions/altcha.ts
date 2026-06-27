import type { Config } from '@netlify/functions'
import { createChallenge, randomInt } from 'altcha-lib'
import { deriveKey } from 'altcha-lib/algorithms/pbkdf2'
import { getRequiredEnv } from './_shared/env'
import { jsonResponse, methodNotAllowed } from './_shared/responses'

const CHALLENGE_COST = 1_000
const COUNTER_MIN = 300
const COUNTER_MAX = 1_200

export default async (req: Request) => {
  if (req.method !== 'GET') {
    return methodNotAllowed()
  }

  try {
    const hmacSignatureSecret = getRequiredEnv('ALTCHA_HMAC_SECRET')

    const challenge = await createChallenge({
      algorithm: 'PBKDF2/SHA-256',
      cost: CHALLENGE_COST,
      counter: randomInt(COUNTER_MAX, COUNTER_MIN),
      deriveKey,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      hmacSignatureSecret,
      data: {
        form: 'contact',
        site: 'lancaster-outdoor-carpentry',
      },
    })

    return jsonResponse(challenge)
  } catch (error) {
    console.error('ALTCHA challenge generation failed:', error)
    return jsonResponse({ ok: false, message: 'Unable to load verification.' }, 500)
  }
}

export const config: Config = {
  path: '/api/altcha',
  method: ['GET'],
}
