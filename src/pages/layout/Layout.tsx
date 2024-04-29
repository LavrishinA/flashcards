import { Link, Outlet } from 'react-router-dom'

import { useMeQuery } from '@/entities/user'
import { Profile } from '@/features/profile'
import { Button } from '@/shared/ui/Button'
import { Loader } from '@/shared/ui/Loader'
import { Header } from '@/widgets/header/Header'

import s from './Layout.module.scss'

export const Layout = () => {
  const { data: user, isError, isLoading } = useMeQuery()

  const isAuth = !isError

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Header>
        {user ? (
          <Profile avatar={user.avatar} email={user.email} name={user.name} />
        ) : (
          <Button as={Link} to={'/sign-in'} variant={'secondary'}>
            Sign in
          </Button>
        )}
      </Header>
      <main className={s.root}>
        <Outlet context={isAuth} />
      </main>
    </>
  )
}
