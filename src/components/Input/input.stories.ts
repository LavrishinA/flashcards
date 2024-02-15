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
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'withIcon', 'search'],
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
    fullWidth: false,
    label: 'Input',
    placeholder: 'Input',
    variant: 'primary',
  },
}

export const WithIcon: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    icon: 'eyeIcon',
    label: 'Input',
    placeholder: 'Input',
    variant: 'withIcon',
  },
}

export const Search: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    icon: 'searchIcon',
    placeholder: 'Input search',
    variant: 'search',
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error!',
    fullWidth: false,
    placeholder: 'Input search',
    variant: 'primary',
  },
}

export const FullWidth: Story = {
  args: {
    disabled: false,
    fullWidth: true,
    label: 'Input',
    placeholder: 'Input search',
    variant: 'primary',
  },
}
