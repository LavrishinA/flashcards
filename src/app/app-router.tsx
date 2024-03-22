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
  {
    children: [
      { element: <SigninPage />, path: '/sign-in' },
      { element: <div>Signup form</div>, path: '/sign-up' },
      { element: <div>Forgot password form</div>, path: '/forgot-password' },
    ],
    element: baseLayout,
  },
]

const privateRoutes: RouteObject[] = [
  {
    children: [
      { element: <MainPage />, path: '/' },
      { element: <div>Deck Cards</div>, path: '/:deckId/cards' },
      { element: <div>Profile</div>, path: '/profile' },
      { element: <div>Learn</div>, path: '/:deckId/learn/:deckName' },
    ],
    element: baseLayout,
  },
]

const router = createBrowserRouter([
  { children: privateRoutes, element: <PrivateRoutes /> },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data: user, isError } = useMeQuery()

  const isAuthenticated = !isError

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  return isAuthenticated ? <Outlet context={user} /> : <Navigate to={'/sign-in'} />
}
