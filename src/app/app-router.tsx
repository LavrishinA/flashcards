import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { baseLayout } from '@/app/baseLayout'

const publicRoutes: RouteObject[] = [
  { element: <div>Signup form</div>, path: '/sign-in' },
  { element: <div>Signup form</div>, path: '/sign-up' },
]

const privateRoutes: RouteObject[] = [
  { element: <div>Main</div>, path: '/' },
  { element: <div>Deck Cards</div>, path: '/:deckId/cards' },
  { element: <div>Profile</div>, path: '/profile' },
  { element: <div>Learn</div>, path: '/:deckId/learn/:deckName' },
]

const router = createBrowserRouter([
  {
    children: [{ children: privateRoutes, element: <PrivateRoutes /> }, ...publicRoutes],
    element: baseLayout,
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  // const isAuthenticated = false
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}
