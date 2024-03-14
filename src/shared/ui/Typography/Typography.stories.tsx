import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/shared/ui/Typography/Typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH ',
    variant: 'h1',
  },
}
