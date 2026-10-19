import { redirect } from 'react-router'
import type { LoaderFunctionArgs, MiddlewareFunction } from 'react-router'
import { meRouterContext } from '../context'

const ME_URL = 'http://localhost:8080/me'

export const meMiddleware: MiddlewareFunction = async ({ request, context }, next) => {
  let response: Response
  try {
    response = await fetch(ME_URL, { signal: request.signal })
  } catch {
    throw redirect('/404')
  }

  if (response.status !== 200) {
    throw redirect('/404')
  }

  context.set(meRouterContext, await response.json())
  return next()
}

export function rootLoader({ context }: LoaderFunctionArgs) {
  return context.get(meRouterContext)
}
