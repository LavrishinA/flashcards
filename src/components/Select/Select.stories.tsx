import type { Meta, StoryObj } from '@storybook/react'

import { SelectItem } from '@/components/Select/SelectItem'

import s from './select.module.scss'

import { Select } from './Select'

const meta: Meta<typeof Select> = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          'Additional take props of <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/select">@radix-ui/react-select</a>',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Select defaultValue={'1'}>
        <SelectItem value={'1'}>Select-box</SelectItem>
        <SelectItem value={'2'}>2</SelectItem>
        <SelectItem value={'3'}>3</SelectItem>
      </Select>
    )
  },
}

export const Active: Story = {
  args: {},
  render: () => {
    return (
      <Select defaultValue={'1'} open>
        <SelectItem value={'1'}>1</SelectItem>
        <SelectItem value={'2'}>2</SelectItem>
        <SelectItem value={'3'}>3</SelectItem>
      </Select>
    )
  },
}

export const Hover: Story = {
  args: {},
  render: () => {
    return (
      <Select className={s.hover} defaultValue={'1'} open>
        <SelectItem value={'1'}>1</SelectItem>
        <SelectItem value={'2'}>2</SelectItem>
        <SelectItem value={'3'}>3</SelectItem>
      </Select>
    )
  },
}

export const Focus: Story = {
  args: {},
  render: () => {
    return (
      <Select className={s.focus} defaultValue={'1'}>
        <SelectItem value={'1'}>1</SelectItem>
        <SelectItem value={'2'}>2</SelectItem>
        <SelectItem value={'3'}>3</SelectItem>
      </Select>
    )
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  render: () => {
    return (
      <Select className={`${s.disabled} ${s.labelDisabled}`} defaultValue={'1'} disabled>
        <SelectItem value={'1'}>1</SelectItem>
        <SelectItem value={'2'}>2</SelectItem>
        <SelectItem value={'3'}>3</SelectItem>
      </Select>
    )
  },
}
