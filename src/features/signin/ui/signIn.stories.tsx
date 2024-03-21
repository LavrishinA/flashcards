import { SignInForm } from '@/features/signin'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'features/Sign in form',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
