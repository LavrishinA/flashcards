import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components/Avatar'
import { DropDownContent, DropdownMenu, DropdownTrigger } from '@/components/DropDown/DropDown'
import { DropdownItem } from '@/components/DropDown/Item'
import { UserSeparator } from '@/components/DropDown/UserSeparator/UserSeparator'
import { DeleteIcon, DropDownTriggerIcon, EditIcon, LogoutIcon, PlayIcon } from '@/components/icons'
import { ProfileIcon } from '@/components/icons/ProfileIcon'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const DropDownDefault: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownTrigger>
          <DropDownTriggerIcon height={16} width={16} />
        </DropdownTrigger>
        <DropDownContent>
          <DropdownItem icon={<PlayIcon height={16} width={16} />} label={'Learn'} />
          <DropdownItem icon={<EditIcon height={16} width={16} />} label={'Edit'} />
          <DropdownItem icon={<DeleteIcon height={16} width={16} />} label={'Delete'} />
        </DropDownContent>
      </DropdownMenu>
    )
  },
}

export const DropDownWithUser: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownTrigger>
          <Avatar username={'Alex'} />
        </DropdownTrigger>
        <DropDownContent>
          <UserSeparator email={'happyhack@gmail.com'} username={'Alex'}>
            <Avatar username={'Alex'} />
          </UserSeparator>
          <DropdownItem icon={<ProfileIcon height={16} width={16} />} label={'My profile'} />
          <DropdownItem icon={<LogoutIcon height={16} width={16} />} label={'Sign out'} />
        </DropDownContent>
      </DropdownMenu>
    )
  },
}
