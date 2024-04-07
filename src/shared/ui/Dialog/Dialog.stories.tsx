import { Button } from '@/shared/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant={'primary'}>Delete Deck</Button>
        </DialogTrigger>
        <DialogContent title={'Delete Deck?'}>Your content</DialogContent>
      </>
    ),
  },
}
