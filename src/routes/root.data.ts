import { redirect } from 'react-router'
import type { LoaderFunctionArgs, MiddlewareFunction } from 'react-router'
import { meRouterContext } from '../context'

const ME_URL = 'http://localhost:8080/me'

export const meMiddleware: MiddlewareFunction = async ({ request, context }, next) => {
  let me: unknown
  try {
    const response = await fetch(ME_URL, { signal: request.signal })
    if (response.status !== 200) {
      throw redirect('/404')
    }
    me = await response.json()
  } catch (error) {
    if (error instanceof Response || request.signal.aborted) {
      throw error
    }
    throw redirect('/404')
  }

  context.set(meRouterContext, me)
  return next()
}

export function rootLoader({ context }: LoaderFunctionArgs) {
  return context.get(meRouterContext)
}
