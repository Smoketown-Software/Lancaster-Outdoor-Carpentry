declare const Netlify: {
  env: {
    get: (name: string) => string | undefined
  }
}

export function getRequiredEnv(name: string) {
  const value = Netlify.env.get(name)

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export function getEnv(name: string, fallback: string) {
  return Netlify.env.get(name) || fallback
}

