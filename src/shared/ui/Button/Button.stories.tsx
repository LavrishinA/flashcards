import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/shared/ui/Button/Button'

import { LogoutIcon } from '../icons'

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
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
