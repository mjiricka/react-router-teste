import { Outlet, useLoaderData } from 'react-router'
import { MeContext } from '../context'
import type { rootLoader } from './root.data'

export function RootLayout() {
  const me = useLoaderData<typeof rootLoader>()
  return (
    <MeContext value={me}>
      <Outlet />
    </MeContext>
  )
}
