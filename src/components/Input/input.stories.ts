import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    disabled: false,
    placeholder: 'Input search',
    search: true,
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error!',
    placeholder: 'Input search',
  },
}
