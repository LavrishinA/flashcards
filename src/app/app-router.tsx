import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { baseLayout } from '@/app/baseLayout'
import { useMeQuery } from '@/entities/user'
import { MainPage } from '@/pages/main-page'
import { SigninPage } from '@/pages/signin-page'

const publicRoutes: RouteObject[] = [
  { element: <SigninPage />, path: '/sign-in' },
  { element: <div>Signup form</div>, path: '/sign-up' },
]

const privateRoutes: RouteObject[] = [
  { element: <MainPage />, path: '/' },
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
  const { isError } = useMeQuery()

  const isAuthenticated = !isError

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}
