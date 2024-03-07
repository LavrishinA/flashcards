import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './DropDown.module.scss'

export const DropdownMenu = RadixDropdownMenu.Root
export const DropdownTrigger = RadixDropdownMenu.Trigger

type DropDownContentProps = ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>

export const DropDownContent = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Content>,
  DropDownContentProps
>((props: DropDownContentProps, ref) => {
  const { children, ...rest } = props

  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        ref={ref}
        {...rest}
        align={'end'}
        alignOffset={-6}
        className={clsx(s.content)}
        sideOffset={4}
      >
        {children}
        <RadixDropdownMenu.Arrow className={clsx(s.arrow)} />
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  )
})
