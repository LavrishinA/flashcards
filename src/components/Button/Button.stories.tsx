import type { Meta, StoryObj } from '@storybook/react'

import { CheckedIconIndicator } from '@/components/icons/CheckedIconIndicator'

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
      mapping: { false: '', true: <CheckedIconIndicator height={16} width={16} /> },
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
