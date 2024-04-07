import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './Checkbox.module.scss'

import { Typography } from '../Typography'
import { CheckedIconIndicator } from '../icons'

export type CheckboxProps = {
  label?: ReactNode
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const generatedId = useId()
    const { id, label, ...rest } = props
    const finalId = id ?? generatedId

    return (
      <div className={s.container}>
        <CheckboxRadix.Root ref={ref} {...rest} className={s.checkbox} id={finalId}>
          <CheckboxRadix.Indicator className={s.indicator}>
            <CheckedIconIndicator height={18} width={18} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {label && (
          <Typography as={'label'} htmlFor={finalId} variant={'body2'}>
            {label}
          </Typography>
        )}
      </div>
    )
  }
)
