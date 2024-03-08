import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/Typography'
import { ArrowDown } from '@/components/icons/ArrowDownForSelect'
import * as SelectBox from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectProps = ComponentPropsWithoutRef<typeof SelectBox.Root> & {
  className?: string
  label?: string
  placeholder?: string
}

export const Select = forwardRef<ElementRef<typeof SelectBox.Root>, SelectProps>(
  ({ children, className, disabled, label, ...props }: SelectProps) => {
    return (
      <div className={s.selectWrapper}>
        <Typography
          as={'label'}
          className={`${s.selectLabel} ${disabled && s.labelDisabled}`}
          variant={'body2'}
        >
          {label}
        </Typography>
        <SelectBox.Root disabled={disabled} {...props}>
          <SelectBox.Trigger className={s.SelectTrigger}>
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
