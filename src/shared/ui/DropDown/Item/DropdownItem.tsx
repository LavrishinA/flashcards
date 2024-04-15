import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './DropdownItem.module.scss'

type DropdownItemProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item>

export const DropdownItem = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Item>,
  DropdownItemProps
>((props: DropdownItemProps, ref) => {
  const { children, className, ...rest } = props

  return (
    <RadixDropdownMenu.Item ref={ref} {...rest} className={clsx(className, s.item)}>
      {children}
    </RadixDropdownMenu.Item>
  )
})
