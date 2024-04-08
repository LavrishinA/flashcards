import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  useOutletContext,
} from 'react-router-dom'

import { CheckEmailPage } from '@/pages/check-email-page/ui/CheckEmailPage'
import { EditProfilePage } from '@/pages/edit-profile-page'
import { ForgotPasswordPage } from '@/pages/forgot-password-page/ui/ForgotPasswordPage'
import { Layout } from '@/pages/layout/Layout'
import { LearnPage } from '@/pages/learn-page'
import { MainPage } from '@/pages/main-page'
import { SigninPage } from '@/pages/signin-page'
import { SignupPage } from '@/pages/signup-page'

const publicRoutes: RouteObject[] = [
  { element: <SigninPage />, path: '/sign-in' },
  { element: <SignupPage />, path: '/sign-up' },
  { element: <ForgotPasswordPage />, path: '/forgot-password' },
  { element: <CheckEmailPage />, path: '/check-email' },
]

const privateRoutes: RouteObject[] = [
  { element: <MainPage />, path: '/' },
  { element: <div>Deck Cards</div>, path: '/:deckId/cards' },
  { element: <EditProfilePage />, path: '/profile' },
  { element: <LearnPage />, path: '/:deckId/learn/:deckName' },
]

const router = createBrowserRouter([
  {
    children: [
      { children: privateRoutes, element: <PrivateRoutes /> },
      { children: publicRoutes, element: <PublicRoutes /> },
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = useOutletContext()

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}

function PublicRoutes() {
  const isAuthenticated = useOutletContext()

  return isAuthenticated ? <Navigate to={'/'} /> : <Outlet />
}
