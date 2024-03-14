import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/shared/ui/Typography'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './UserSeparator.module.scss'

type UseSeparatorProps = {
  email: string
  username: string
} & ComponentPropsWithoutRef<typeof RadixDropdownMenu.Separator>

export const UserSeparator = (props: UseSeparatorProps) => {
  const { children, className, email, username, ...rest } = props

  return (
    <RadixDropdownMenu.Separator className={clsx(className, s.user)} {...rest}>
      {children}
      <div className={s.userdata}>
        <Typography as={'span'} variant={'subtitle2'}>
          {username}
        </Typography>
        <Typography as={'span'} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </RadixDropdownMenu.Separator>
  )
}
