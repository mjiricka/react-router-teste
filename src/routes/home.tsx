import { use } from 'react'
import { MeContext } from '../context'

export function Home() {
  const me = use(MeContext)
  return <pre>{JSON.stringify(me, null, 2)}</pre>
}
