import { useState } from 'react'

import { Slider } from '@/components/Slider/Slider'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    max: 100,
    min: 1,
    value: [1, 100],
  },

  render: args => {
    const [values, setValues] = useState(args.value)

    return <Slider {...args} onValueChange={setValues} value={values} />
  },
}
