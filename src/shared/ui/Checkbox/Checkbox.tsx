import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './Checkbox.module.scss'

import { Typography } from '../Typography'
import { CheckedIconIndicator } from '../icons'

export type CheckboxProps = {
  label?: ReactNode
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const { id, label } = props

    return (
      <div className={s.container}>
        <CheckboxRadix.Root ref={ref} {...props} className={s.checkbox}>
          <CheckboxRadix.Indicator className={s.indicator}>
            <CheckedIconIndicator height={18} width={18} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {label && (
          <Typography as={'label'} htmlFor={id} variant={'body2'}>
            {label}
          </Typography>
        )}
      </div>
    )
  }
)
