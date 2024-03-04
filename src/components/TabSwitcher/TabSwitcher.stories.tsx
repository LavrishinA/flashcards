import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './TabSwitcher'

const meta: Meta<typeof TabSwitcher> = {
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  component: TabSwitcher,
  parameters: {
    docs: {
      description: {
        component:
          'Additional take props of <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/tabs">@radix-ui/react-tabs</a>',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Amazing tabs!',
    values: [
      { key: 'Text Right', value: 'right' },
      { key: 'Text Left', value: 'left' },
      { key: 'Text Top', value: 'top' },
      { disabled: true, key: 'Text Center', value: 'center' },
    ],
  },
  render: props => {
    const [currentTab, setCurrentTab] = useState<string>()
    const tabHandler = (value: string) => setCurrentTab(value)

    return (
      <TabSwitcher
        defaultValue={'right'}
        {...props}
        onValueChange={tabHandler}
        value={currentTab}
      />
    )
  },
}
