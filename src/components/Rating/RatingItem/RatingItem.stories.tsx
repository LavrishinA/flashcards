import type { Meta, StoryObj } from '@storybook/react'

import { RatingItem } from '@/components/Rating/RatingItem/RatingItem'

const meta: Meta<typeof RatingItem> = {
  component: RatingItem,
  tags: ['autodocs'],
} satisfies Meta<typeof RatingItem>

type Story = StoryObj<typeof meta>
export default meta
export const Default: Story = {
  args: {
    height: 64,
    selected: false,
    width: 64,
  },
}

export const Hovered: Story = {
  args: {
    height: 64,
    selected: true,
    width: 64,
  },
}
