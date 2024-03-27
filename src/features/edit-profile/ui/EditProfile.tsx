import { useNavigate } from 'react-router-dom'

import { useLogoutMutation, useMeQuery } from '@/entities/user'
import { Avatar } from '@/shared/ui/Avatar'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { LogoutIcon } from '@/shared/ui/icons'

import s from './EditProfile.module.scss'

export const EditProfile = () => {
  const { data: user } = useMeQuery()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const logoutHandler = () => {
    logout()
      .unwrap()
      .then(() => {
        navigate('/sign-in')
      })
  }

  return (
    <>
      <Card className={s.card}>
        <Typography className={s.title} variant={'h1'}>
          Personal information
          {user && <Avatar className={s.avatar} src={user?.avatar} username={user?.name} />}
        </Typography>
        <Button
          icon={<LogoutIcon height={16} width={16} />}
          label={'Log out'}
          onClick={logoutHandler}
          variant={'secondary'}
        />
      </Card>
    </>
  )
}
