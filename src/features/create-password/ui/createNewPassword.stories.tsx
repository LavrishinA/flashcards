import { CreateNewPassword } from '@/features/create-password'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CreateNewPassword> = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'features/Create new password form',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
