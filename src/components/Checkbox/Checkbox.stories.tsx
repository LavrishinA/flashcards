import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './'

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
  title: 'Checkbox',
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
    const [status, setStatus] = useState<boolean>(checked)
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
