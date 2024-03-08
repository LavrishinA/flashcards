import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import * as SelectBox from '@radix-ui/react-select'

import s from './select.module.scss'

type ItemProps = ComponentPropsWithoutRef<typeof SelectBox.Item>

export const SelectItem = React.forwardRef<ElementRef<typeof SelectBox.Item>, ItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <SelectBox.Item {...props} className={`${s.SelectItem} ${className}`} ref={ref}>
        <SelectBox.ItemText ref={ref}>{children}</SelectBox.ItemText>
      </SelectBox.Item>
    )
  }
)
