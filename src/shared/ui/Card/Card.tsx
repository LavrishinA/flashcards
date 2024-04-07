import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './Card.module.scss'

export type CardProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>
export const Card = <T extends ElementType>(props: CardProps<T>) => {
  const { as: Component = 'div', className, ...rest } = props

  return <Component {...rest} className={`${s.card} ${className}`} />
}
