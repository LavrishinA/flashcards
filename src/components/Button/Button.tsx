import { ElementType, ReactNode } from 'react'

type ButtonProps = {
  as: ElementType
  children: ReactNode
}

export const Button = (props: ButtonProps) => {
  const { as: Component = 'button', children } = props

  return <Component>{children}</Component>
}
