declare const Netlify: {
  env: {
    get: (name: string) => string | undefined
  }
}

export function getRequiredEnv(name: string) {
  const value = globalThis.Netlify?.env.get(name) || process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export function getEnv(name: string, fallback: string) {
  return globalThis.Netlify?.env.get(name) || process.env[name] || fallback
}
