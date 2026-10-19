import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './routes/home'
import { NotFound } from './routes/not-found'
import { RootLayout } from './routes/root'
import { meMiddleware, rootLoader } from './routes/root.data'

const router = createBrowserRouter([
  {
    path: '/',
    middleware: [meMiddleware],
    loader: rootLoader,
    Component: RootLayout,
    children: [{ index: true, Component: Home }],
  },
  { path: '/404', Component: NotFound },
  { path: '*', Component: NotFound },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
