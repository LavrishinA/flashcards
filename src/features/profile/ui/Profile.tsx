import { useMeQuery } from '@/entities/user'
import { Avatar } from '@/shared/ui/Avatar'
import { DropDownContent, DropdownMenu, DropdownTrigger } from '@/shared/ui/DropDown'
import { DropdownItem } from '@/shared/ui/DropDown/Item'
import { UserSeparator } from '@/shared/ui/DropDown/UserSeparator'
import { Typography } from '@/shared/ui/Typography'
import { LogoutIcon } from '@/shared/ui/icons'
import { ProfileIcon } from '@/shared/ui/icons/ProfileIcon'

import s from './Profile.module.scss'
export const Profile = () => {
  const { data: user } = useMeQuery()

  return (
    <div className={s.profileContainer}>
      {user && (
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
              <DropdownItem icon={<LogoutIcon height={16} width={16} />} label={'Sign out'} />
            </DropDownContent>
          </DropdownMenu>
        </>
      )}
    </div>
  )
}
