import { useNavigate } from 'react-router-dom'

import { useLogout } from '@/features/logout'
import { Avatar } from '@/shared/ui/Avatar'
import { DropDownContent, DropdownMenu, DropdownTrigger } from '@/shared/ui/DropDown'
import { DropdownItem } from '@/shared/ui/DropDown/Item'
import { DropdownLabel } from '@/shared/ui/DropDown/Label'
import { Typography } from '@/shared/ui/Typography'
import { LogoutIcon } from '@/shared/ui/icons'
import { ProfileIcon } from '@/shared/ui/icons/ProfileIcon'

import s from './Profile.module.scss'

type Props = {
  avatar: string
  email: string
  name: string
}

export const Profile = (props: Props) => {
  const { avatar, email, name } = props

  const navigate = useNavigate()
  const { logoutHandler } = useLogout()
  const navigateToEditProfile = () => navigate('/profile')

  return (
    <div className={s.profileContainer}>
      <Typography as={'span'} variant={'subtitle1'}>
        {name}
      </Typography>
      <DropdownMenu>
        <DropdownTrigger>
          <Avatar className={s.avatar} src={avatar} username={name} />
        </DropdownTrigger>
        <DropDownContent>
          <DropdownLabel className={s.user}>
            <Avatar src={avatar} username={name} />
            <div className={s.userdata}>
              <Typography as={'span'} variant={'subtitle2'}>
                {name}
              </Typography>
              <Typography as={'span'} variant={'caption'}>
                {email}
              </Typography>
            </div>
          </DropdownLabel>
          <DropdownItem onClick={navigateToEditProfile}>
            <ProfileIcon height={16} width={16} />
            My profile
          </DropdownItem>
          <DropdownItem onClick={logoutHandler}>
            <LogoutIcon height={16} width={16} /> Sign out
          </DropdownItem>
        </DropDownContent>
      </DropdownMenu>
    </div>
  )
}
