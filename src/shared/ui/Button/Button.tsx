import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

import { Typography } from '../Typography'

type ButtonProps<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  icon?: ReactNode
  label?: string
  variant?: 'primary' | 'secondary' | 'text'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    icon,
    label,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component className={clsx(s.btn, className, s[variant], fullWidth && s.fullWidth)} {...rest}>
      {icon}
      {
        <Typography as={'span'} variant={variant === 'text' ? 'caption' : 'subtitle2'}>
          {label}
        </Typography>
      }
      {children}
    </Component>
  )
}
