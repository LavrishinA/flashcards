import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta: Meta<typeof Button> = {
  args: {
    children: 'Button',
  },
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Link: Story = {
  args: {
    ...meta.args,
    as: 'a',
  },
}
