import { ReactNode } from 'react'

import { Typography } from '@/components/Typography'
import { CheckedIconIndicator } from '@/components/icons/CheckedIconIndicator'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './Checkbox.module.scss'

type CheckboxProps = {
  checked: boolean
  disabled?: boolean
  id?: string
  label?: ReactNode
  name?: string
  onCheckedChange: (checked: boolean) => void
  required?: boolean
}

export const Checkbox = (props: CheckboxProps) => {
  const { id, label } = props

  return (
    <div className={s.container}>
      <CheckboxRadix.Root {...props} className={s.checkbox}>
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
