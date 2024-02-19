import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return fetch(
    `https://app.osmosis.zone/api/${request.url.split('/').slice(4).join('/')}`,
  )
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/osmosis/:path*',
}
