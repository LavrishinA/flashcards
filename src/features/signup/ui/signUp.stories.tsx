import { SignUpForm } from '@/features/signup'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'features/Sign up form',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => console.log(data.password, data.email),
  },
}
