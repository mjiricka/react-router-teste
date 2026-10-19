import { createContext as createReactContext } from 'react'
import { createContext as createRouterContext } from 'react-router'

export type Me = unknown

// Router context filled by the root middleware with the `/me` response.
export const meRouterContext = createRouterContext<Me>()

// React context exposing the `/me` response to components.
export const MeContext = createReactContext<Me>(null)
