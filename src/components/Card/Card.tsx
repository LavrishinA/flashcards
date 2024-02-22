import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>
export const Card = <T extends ElementType>(props: CardProps<T>) => {
  const { as: Component = 'div', children, className, ...rest } = props

  return (
    <Component {...rest} className={`${s.card} ${className}`}>
      {children}
    </Component>
  )
}
