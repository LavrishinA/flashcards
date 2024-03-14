import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '@/shared/ui/Select/Select'
import { SelectItem } from '@/shared/ui/Select/SelectItem'

const meta: Meta<typeof Select> = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    variant: {
      control: 'radio',
      options: ['l', 'sm'],
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
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    variant: 'l',
  },
  render: ({ disabled, variant }) => {
    return (
      <Select defaultValue={'1'} variant={variant}>
        <SelectItem value={'1'} variant={variant}>
          1
        </SelectItem>
        <SelectItem value={'2'} variant={variant}>
          2
        </SelectItem>
        <SelectItem disabled={disabled} value={'3'} variant={variant}>
          3
        </SelectItem>
      </Select>
    )
  },
}
