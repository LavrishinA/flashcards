import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

type ButtonProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'text'
} & ComponentPropsWithoutRef<T>

type PolymorphRef<T extends ElementType> = {
  ref?: Ref<ElementRef<T>>
}

type ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & PolymorphRef<T>
) => ReactNode

export const Button: ButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ElementRef<T>) => {
    const { as, children, className, fullWidth, variant = 'primary', ...rest } = props
    const Component: ElementType = as || 'button'

    return (
      <Component
        className={clsx(s.btn, className, s[variant], fullWidth && s.fullWidth)}
        {...rest}
        ref={ref}
      >
        {children}
      </Component>
    )
  }
)
