import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/shared/ui/Typography'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './DropdownItem.module.scss'

type DropdownItemProps = {
  icon?: ReactNode
  label: string
} & ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item>

export const DropdownItem = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Item>,
  DropdownItemProps
>((props: DropdownItemProps, ref) => {
  const { children, className, icon, label, ...rest } = props

  return (
    <RadixDropdownMenu.Item ref={ref} {...rest} className={clsx(className, s.item)}>
      {icon}
      <Typography as={'span'} variant={'caption'}>
        {label}
        {/*{children}*/}
      </Typography>
    </RadixDropdownMenu.Item>
  )
})
