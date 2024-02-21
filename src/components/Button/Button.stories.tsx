import type { Meta, StoryObj } from '@storybook/react'

import { LogoutIcon } from '@/components/icons/LogoutIcon'

import { Button } from './'

const meta: Meta<typeof Button> = {
  argTypes: {
    as: {
      control: 'text',
      table: {
        defaultValue: { summary: '"button"' },
      },
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'boolean' },
      mapping: { false: '', true: <LogoutIcon height={16} width={16} /> },
    },
    label: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    as: 'button',
    label: 'Button primary',
  },
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
