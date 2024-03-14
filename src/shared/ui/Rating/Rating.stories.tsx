import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Rating } from '@/shared/ui/Rating/Rating'

const meta: Meta<typeof Rating> = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const FullRating: Story = {
  args: {
    maxStar: 5,
    size: 16,
  },
  render: ({ color, maxStar, size }) => {
    const [rating, setRating] = useState<number>(2)
    const changeRatingHandler = (r: number) => setRating(r)

    return (
      <Rating
        color={color}
        maxStar={maxStar}
        onClick={changeRatingHandler}
        rating={rating}
        size={size}
      />
    )
  },
}
