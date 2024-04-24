import { useId, useState } from 'react'

import { RatingItem } from '@/shared/ui/Rating/RatingItem'
import { ReadOnlyRatingItem } from '@/shared/ui/Rating/RatingItem/ReadOnlyRatingItem'
import { clsx } from 'clsx'

import s from './Rating.module.scss'

type RatingProps = {
  color?: string
  maxStar: number
  onClick: (n: number) => void
  rating: number
  readonly?: boolean
  size: number
}

export const Rating = (props: RatingProps) => {
  const { color, maxStar, onClick, rating = 1, readonly = false, size } = props

  const [tempRating, setTempRating] = useState<number>(0)
  const id = useId()
  const ratingHandler = (n: number) => onClick(n)
  const hoverInHandler = (n: number) => setTempRating(n)
  const hoverOutHandler = () => setTempRating(0)

  return (
    <div className={clsx(s.rating, color ?? s.itemColor)}>
      {Array.from({ length: maxStar }, (_, i) => {
        const starNumber = i + 1

        return readonly ? (
          <ReadOnlyRatingItem
            color={color}
            height={size}
            key={`${id}-${starNumber}`}
            selected={tempRating ? tempRating > i : rating > i}
            starNumber={starNumber}
            width={size}
          />
        ) : (
          <RatingItem
            color={color}
            height={size}
            key={`${id}-${starNumber}`}
            onHoverIn={hoverInHandler}
            onHoverOut={hoverOutHandler}
            onRating={ratingHandler}
            selected={tempRating ? tempRating > i : rating > i}
            starNumber={starNumber}
            width={size}
          />
        )
      })}
    </div>
  )
}
