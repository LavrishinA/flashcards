import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { Typography } from '@/components/Typography'

import s from './Button.module.scss'

type ButtonProps<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  icon?: ReactNode
  label?: string
  type?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, icon, label, type = 'primary' } = props

  return (
    <Component
      className={`${s.btn} ${className} ${s[type]} ${fullWidth && s.fullWidth}`}
      {...props}
    >
      {icon}
      <Typography as={'span'} variant={'subtitle2'}>
        {label}
      </Typography>
    </Component>
  )
}
