import { ComponentPropsWithoutRef } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

type UseSeparatorProps = {} & ComponentPropsWithoutRef<typeof RadixDropdownMenu.Label>

export const DropdownLabel = (props: UseSeparatorProps) => {
  const { children, className, ...rest } = props

  return (
    <RadixDropdownMenu.Label className={clsx(className)} {...rest}>
      {children}
    </RadixDropdownMenu.Label>
  )
}
