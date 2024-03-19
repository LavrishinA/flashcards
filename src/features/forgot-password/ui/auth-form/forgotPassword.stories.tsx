import { ForgotPasswordForm } from '@/features/forgot-password'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ForgotPasswordForm> = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'features/Forgot password form',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
