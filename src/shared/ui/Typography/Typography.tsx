import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './Typography.module.scss'

type TypographyProps<E extends ElementType> = {
  /** Path name string of html valid tag  like h1-h6, label, span, p and etc...(default h1) . */
  as?: E
  /** Variant of  style according to ui template */
  variant:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<E>

export const Typography = <E extends ElementType = 'h1'>(props: TypographyProps<E>) => {
  const { as: Component = 'h1', children, className, variant = 'h1', ...rest } = props

  return (
    <Component className={`${s[variant]} ${className}`} {...rest}>
      {children}
    </Component>
  )
}
