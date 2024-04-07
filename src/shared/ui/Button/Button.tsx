import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

type ButtonProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  fullWidth?: boolean
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
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component className={clsx(s.btn, className, s[variant], fullWidth && s.fullWidth)} {...rest}>
      {children}
    </Component>
  )
}
