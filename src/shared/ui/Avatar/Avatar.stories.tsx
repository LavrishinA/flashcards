import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/shared/ui/Avatar/Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const AvatarDefault: Story = {
  args: {
    src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2346733d-8582-4888-b5f0-8d9d94d08145/dfy9xqy-820c7da7-36f6-4396-9c4c-0764879ee491.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzNDY3MzNkLTg1ODItNDg4OC1iNWYwLThkOWQ5NGQwODE0NVwvZGZ5OXhxeS04MjBjN2RhNy0zNmY2LTQzOTYtOWM0Yy0wNzY0ODc5ZWU0OTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qOaKSUtwFYOoh7ppN10Hs5pGursj8o6q2BX9EgxC0vM',
  },
}

export const AvatarWithoutSrc: Story = {
  args: {
    username: 'chamber',
  },
}
