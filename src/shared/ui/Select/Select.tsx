import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDown } from '@/shared/ui/icons/ArrowDownForSelect'
import * as SelectBox from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { Typography } from '../Typography'

type SelectProps = ComponentPropsWithoutRef<typeof SelectBox.Root> & {
  className?: string
  label?: string
  placeholder?: string
  variant: 'l' | 'sm'
}

export const Select = forwardRef<ElementRef<typeof SelectBox.Root>, SelectProps>(
  ({ children, className, disabled, label, variant, ...props }: SelectProps, ref) => {
    return (
      <div className={s.selectWrapper}>
        <Typography
          as={'label'}
          className={clsx(s.selectLabel, disabled && s.labelDisabled)}
          variant={'body2'}
        >
          {label}
        </Typography>
        <SelectBox.Root disabled={disabled} {...props}>
          <SelectBox.Trigger className={clsx(s.SelectTrigger, s[variant])} ref={ref}>
            <SelectBox.Value placeholder />
            <SelectBox.Icon asChild className={s.Arrow}>
              <ArrowDown />
            </SelectBox.Icon>
          </SelectBox.Trigger>
          <SelectBox.Portal>
            <SelectBox.Content
              align={'start'}
              className={s.SelectContent}
              position={'popper'}
              side={'bottom'}
            >
              <SelectBox.Viewport>
                <SelectBox.Group className={s.triggerArrow}>{children}</SelectBox.Group>
              </SelectBox.Viewport>
            </SelectBox.Content>
          </SelectBox.Portal>
        </SelectBox.Root>
      </div>
    )
  }
)
