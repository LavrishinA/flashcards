import { useNavigate } from 'react-router-dom'

import { useLogoutMutation } from '@/entities/user'
import { Avatar } from '@/shared/ui/Avatar'
import { DropDownContent, DropdownMenu, DropdownTrigger } from '@/shared/ui/DropDown'
import { DropdownItem } from '@/shared/ui/DropDown/Item'
import { UserSeparator } from '@/shared/ui/DropDown/UserSeparator'
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
    <div className={s.profileContainer}>
      <Typography as={'span'} variant={'subtitle1'}>
        {name}
      </Typography>
      <DropdownMenu>
        <DropdownTrigger>
          <Avatar src={avatar} username={name} />
        </DropdownTrigger>
        <DropDownContent>
          <UserSeparator email={email} username={name}>
            <Avatar src={avatar} username={name} />
          </UserSeparator>
          <DropdownItem icon={<ProfileIcon height={16} width={16} />} label={'My profile'} />
          <DropdownItem
            icon={<LogoutIcon height={16} width={16} />}
            label={'Sign out'}
            onClick={logoutHandler}
          />
        </DropDownContent>
      </DropdownMenu>
    </div>
  )
}
