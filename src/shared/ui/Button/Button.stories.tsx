import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/shared/ui/Button/Button'

import { LogoutIcon } from '../icons'

const meta: Meta<typeof Button> = {
  args: {
    as: 'button',
    label: 'Button primary',
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIconInFront: Story = {
  args: {
    children: (
      <>
        <LogoutIcon height={18} width={18} />
        Hello
      </>
    ),
  },
}

export const WithIconAfter: Story = {
  args: {
    children: (
      <>
        Hello
        <LogoutIcon height={18} width={18} />
      </>
    ),
  },
}
