import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom'

import { store } from '@/app/app-store'
import { baseLayout } from '@/app/baseLayout'
import { useMeQuery } from '@/entities/user'
import { userApi } from '@/entities/user/api/userApi'
import { MainPage } from '@/pages/main-page'
import { SigninPage } from '@/pages/signin-page'

const publicRoutes: RouteObject[] = [
  { element: <SigninPage />, path: '/sign-in' },
  { element: <div>Signup form</div>, path: '/sign-up' },
  { element: <div>Forgot password form</div>, path: '/forgot-password' },
]

const privateRoutes: RouteObject[] = [
  {
    element: <MainPage />,

    path: '/',
  },
  { element: <div>Deck Cards</div>, path: '/:deckId/cards' },
  { element: <div>Profile</div>, path: '/profile' },
  { element: <div>Learn</div>, path: '/:deckId/learn/:deckName' },
]

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
        loader: async () => {
          const p = store.dispatch(userApi.endpoints.me.initiate(undefined, undefined))

          try {
            const response = await p.unwrap()

            return response
          } catch (e) {
            return redirect('/sign-in')
          } finally {
            p.unsubscribe()
          }
        },
      },
      ...publicRoutes,
    ],
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
