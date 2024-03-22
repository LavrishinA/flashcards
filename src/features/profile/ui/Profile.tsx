import { Link, useNavigate, useOutletContext } from 'react-router-dom'

import { useLogoutMutation } from '@/entities/user'
import { userMeResponse } from '@/entities/user/model/types'
import { Avatar } from '@/shared/ui/Avatar'
import { Button } from '@/shared/ui/Button'
import { DropDownContent, DropdownMenu, DropdownTrigger } from '@/shared/ui/DropDown'
import { DropdownItem } from '@/shared/ui/DropDown/Item'
import { UserSeparator } from '@/shared/ui/DropDown/UserSeparator'
import { Typography } from '@/shared/ui/Typography'
import { LogoutIcon } from '@/shared/ui/icons'
import { ProfileIcon } from '@/shared/ui/icons/ProfileIcon'

import s from './Profile.module.scss'

export const Profile = () => {
  const [logout] = useLogoutMutation()
  const user = useOutletContext<userMeResponse>()
  const navigate = useNavigate()

  const logoutHandler = () => {
    logout()
      .unwrap()
      .then(() => {
        navigate('/sign-in')
      })
  }

  return (
    <div className={s.profileContainer}>
      {user ? (
        <>
          <Typography as={'span'} variant={'subtitle1'}>
            {user.name}
          </Typography>
          <DropdownMenu>
            <DropdownTrigger>
              <Avatar src={user.avatar} username={user.name} />
            </DropdownTrigger>
            <DropDownContent>
              <UserSeparator email={user.email} username={user.name}>
                <Avatar src={user.avatar} username={user.name} />
              </UserSeparator>
              <DropdownItem icon={<ProfileIcon height={16} width={16} />} label={'My profile'} />
              <DropdownItem
                icon={<LogoutIcon height={16} width={16} />}
                label={'Sign out'}
                onClick={logoutHandler}
              />
            </DropDownContent>
          </DropdownMenu>
        </>
      ) : (
        <Button as={Link} to={'/sign-in'} type={'secondary'}>
          Sign in
        </Button>
      )}
    </div>
  )
}
