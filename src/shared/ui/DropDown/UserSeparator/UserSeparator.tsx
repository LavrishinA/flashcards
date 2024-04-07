import { ComponentPropsWithoutRef } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

type UseSeparatorProps = {
  email: string
  username: string
} & ComponentPropsWithoutRef<typeof RadixDropdownMenu.Separator>

export const UserSeparator = (props: UseSeparatorProps) => {
  const { children, className, email, username, ...rest } = props

  return (
    <RadixDropdownMenu.Separator className={clsx(className)} {...rest}>
      {children}
    </RadixDropdownMenu.Separator>
  )
}
