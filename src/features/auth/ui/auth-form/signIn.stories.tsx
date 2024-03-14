import { SignInForm } from '@/features/auth/ui/auth-form/SignInForm'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
