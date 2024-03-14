import { ComponentProps } from 'react'

import { FullStar, Star } from '@/shared/ui/icons'

import s from './RatingItem.module.scss'

type StarProps = Pick<ComponentProps<'svg'>, 'color' | 'height' | 'width'> & {
  color?: string
  onHoverIn: (n: number) => void
  onHoverOut: () => void
  onRating: (n: number) => void
  selected: boolean
  starNumber: number
}

export const RatingItem = (props: StarProps) => {
  const { onHoverIn, onHoverOut, onRating, selected, starNumber, ...rest } = props

  const mouseEnterHandler = () => onHoverIn(starNumber)
  const MouseLeaveHandLer = () => onHoverOut()
  const ratingHandler = () => onRating(starNumber)

  return (
    <span
      className={s.star}
      onClick={ratingHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={MouseLeaveHandLer}
    >
      {selected ? <FullStar {...rest} /> : <Star {...rest} />}
    </span>
  )
}
