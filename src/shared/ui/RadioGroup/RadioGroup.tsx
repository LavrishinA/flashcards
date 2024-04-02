import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { RadioItem } from '@/shared/ui/RadioGroup/RadioItem/RadioGroupItem'
import { Typography } from '@/shared/ui/Typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './RadioGroup.module.scss'

export type RadioGroupProps = Omit<
  ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>,
  'asChild'
> & {
  options: {
    disabled?: boolean
    label: string
    value: string
  }[]
}

export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  (props, ref) => {
    const { className, options, ...rest } = props

    return (
      <RadixRadioGroup.Root className={clsx(s.radioGroup, className)} {...rest} ref={ref}>
        {options.map(el => (
          <Typography
            as={'label'}
            className={clsx(s.labelWrapper, { [s.disabled]: el.disabled }, className)}
            key={el.label}
            variant={'body2'}
          >
            <RadioItem key={el.value} {...el} />
            {el.label}
          </Typography>
        ))}
      </RadixRadioGroup.Root>
    )
  }
)
