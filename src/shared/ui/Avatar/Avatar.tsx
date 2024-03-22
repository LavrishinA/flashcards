import { ComponentPropsWithoutRef } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './Avatar.module.scss'

import { Typography } from '../Typography'

type AvatarProps = {
  /** Path username prop it will show first letter if src doesn't exist*/
  username: string
} & ComponentPropsWithoutRef<typeof RadixAvatar.Image>

export const Avatar = (props: AvatarProps) => {
  const { username, ...rest } = props

  return (
    <RadixAvatar.Root>
      <RadixAvatar.Image className={s.avatar} loading={'lazy'} {...rest} />
      <RadixAvatar.Fallback asChild className={clsx(s.avatar, s.fallback)}>
        <Typography as={'p'} variant={'subtitle2'}>
          {username?.[0]}
        </Typography>
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
