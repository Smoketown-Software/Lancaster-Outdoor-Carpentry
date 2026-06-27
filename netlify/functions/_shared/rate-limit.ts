import { getStore } from '@netlify/blobs'

const LIMIT = 5
const WINDOW_MS = 10 * 60 * 1000

type RateLimitRecord = {
  count: number
  resetAt: number
}

export async function isRateLimited(ip: string) {
  const store = getStore({ name: 'contact-rate-limit', consistency: 'strong' })
  const key = `rate-limit:${ip || 'unknown'}`
  const now = Date.now()
  const current = await store.get(key, { type: 'json' }) as RateLimitRecord | null

  if (!current || current.resetAt <= now) {
    await store.setJSON(key, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  if (current.count >= LIMIT) {
    return true
  }

  await store.setJSON(key, {
    count: current.count + 1,
    resetAt: current.resetAt,
  })

  return false
}

