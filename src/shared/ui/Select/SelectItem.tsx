import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import * as SelectBox from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

type ItemProps = { variant?: 'l' | 'sm' } & ComponentPropsWithoutRef<typeof SelectBox.Item>

export const SelectItem = React.forwardRef<ElementRef<typeof SelectBox.Item>, ItemProps>(
  ({ children, className, variant = 'l', ...props }, ref) => {
    return (
      <SelectBox.Item {...props} className={clsx(s.SelectItem, className, s[variant])} ref={ref}>
        <SelectBox.ItemText ref={ref}>{children}</SelectBox.ItemText>
      </SelectBox.Item>
    )
  }
)
