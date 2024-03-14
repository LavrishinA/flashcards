import { ComponentPropsWithoutRef } from 'react'

import * as RadixRadio from '@radix-ui/react-radio-group'

import s from '../RadioGroup.module.scss'

type RadioGroupItemProps = Omit<ComponentPropsWithoutRef<typeof RadixRadio.Item>, 'asChild'>

export const RadioItem = ({ className, disabled, ...rest }: RadioGroupItemProps) => {
  return (
    <RadixRadio.Item className={s.item} disabled={disabled} {...rest}>
      <RadixRadio.Indicator className={s.indicator} />
    </RadixRadio.Item>
  )
}
