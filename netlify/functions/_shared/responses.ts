export type ApiResult = {
  ok: boolean
  message?: string
}

export function jsonResponse(body: ApiResult | Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export function methodNotAllowed() {
  return jsonResponse({ ok: false, message: 'Method not allowed.' }, 405)
}

