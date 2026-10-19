# react-router-teste

Single page app built with React 19, React Router 8.4 (data mode) and Vite.

## How it works

- The root route (`/`) has a middleware (`src/routes/root.data.ts`) that fetches
  `http://localhost:8080/me`.
  - If the response status is `200`, the JSON body is stored in the router context
    (`meRouterContext`), read by the root loader and provided to components through
    the React context `MeContext` (`src/context.ts`).
  - Any other status (or a network error) redirects to `/404`.
- The root page (`src/routes/home.tsx`) reads `MeContext` and renders it as JSON.

The API on `localhost:8080` must allow CORS requests from the app's origin.

## Scripts

```sh
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint     # run oxlint
```
