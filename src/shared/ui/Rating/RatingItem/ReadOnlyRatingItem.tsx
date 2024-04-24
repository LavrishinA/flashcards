import { ComponentProps } from 'react'

import { FullStar, Star } from '@/shared/ui/icons'

import s from '@/shared/ui/Rating/RatingItem/RatingItem.module.scss'

type Props = {
  color?: string
  selected: boolean
  starNumber: number
} & Pick<ComponentProps<'svg'>, 'color' | 'height' | 'width'>

export const ReadOnlyRatingItem = (props: Props) => {
  const { selected, starNumber, ...rest } = props

  return <span className={s.star}>{selected ? <FullStar {...rest} /> : <Star {...rest} />}</span>
}
