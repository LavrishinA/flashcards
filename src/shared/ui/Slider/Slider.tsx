import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/shared/ui/Typography'
import * as SliderPrimitive from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  value: number[]
} & Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'asChild'>

export const Slider = (props: Props) => {
  const { className, onValueChange, value, ...rest } = props

  return (
    <div className={s.container}>
      <Typography className={s.value} variant={'body1'}>
        {value?.[0]}
      </Typography>
      <SliderPrimitive.Root
        className={s.sliderRoot}
        onValueChange={onValueChange}
        value={value}
        {...rest}
      >
        <SliderPrimitive.Track className={s.sliderTrack}>
          <SliderPrimitive.Range className={s.sliderRange} />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className={s.sliderThumb} />
        <SliderPrimitive.Thumb className={s.sliderThumb} />
      </SliderPrimitive.Root>
      <Typography className={s.value} variant={'body1'}>
        {value?.[1]}
      </Typography>
    </div>
  )
}
