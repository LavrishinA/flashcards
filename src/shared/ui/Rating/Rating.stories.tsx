import type { Meta, StoryObj } from '@storybook/react'

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
    rating: 3,
    size: 16,
  },
  render: ({ color, maxStar, rating, size }) => {
    return <Rating color={color} maxStar={maxStar} rating={rating} size={size} />
  },
}

export const ReadOnlyRating: Story = {
  args: {
    maxStar: 5,
    readonly: true,
    size: 16,
  },
}
