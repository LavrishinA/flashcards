import { CheckEmail } from '@/features/check-email'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CheckEmail> = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'features/Check email form',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
