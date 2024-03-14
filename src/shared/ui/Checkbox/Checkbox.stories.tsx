import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Accept',
  },
  render: ({ checked, disabled, label }) => {
    const [status, setStatus] = useState(checked)
    const statusHandler = () => setStatus(prevState => !prevState)

    return (
      <Checkbox
        checked={status}
        disabled={disabled}
        id={'c1'}
        label={label}
        onCheckedChange={statusHandler}
      />
    )
  },
}
