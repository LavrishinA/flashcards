import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

import { Typography } from '../Typography'

type ButtonProps<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  icon?: ReactNode
  label?: string
  type?: 'primary' | 'secondary' | 'text'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    icon,
    label,
    type = 'primary',
    ...rest
  } = props

  return (
    <Component className={clsx(s.btn, className, s[type], fullWidth && s.fullWidth)} {...rest}>
      {icon}
      {
        <Typography as={'span'} variant={type === 'text' ? 'caption' : 'subtitle2'}>
          {label}
        </Typography>
      }
    </Component>
  )
}
