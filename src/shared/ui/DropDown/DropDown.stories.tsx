import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/shared/ui/Avatar'
import { DropDownContent, DropdownMenu, DropdownTrigger } from '@/shared/ui/DropDown/DropDown'
import { DropdownItem } from '@/shared/ui/DropDown/Item'
import { DropdownLabel } from '@/shared/ui/DropDown/Label'
import { DeleteIcon, DropDownTriggerIcon, EditIcon, LogoutIcon, PlayIcon } from '@/shared/ui/icons'
import { ProfileIcon } from '@/shared/ui/icons/ProfileIcon'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DropDown',
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
          <DropdownItem>
            <PlayIcon height={16} width={16} /> Learn
          </DropdownItem>
          <DropdownItem>
            <EditIcon height={16} width={16} /> Edit
          </DropdownItem>
          <DropdownItem>
            <DeleteIcon height={16} width={16} /> Delete
          </DropdownItem>
        </DropDownContent>
      </DropdownMenu>
    )
  },
}

export const DropDownWithLabel: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownTrigger>
          <Avatar username={'Alex'} />
        </DropdownTrigger>
        <DropDownContent>
          <DropdownLabel>
            <Avatar username={'Alex'} />
          </DropdownLabel>
          <DropdownItem>
            <ProfileIcon height={16} width={16} /> My profile
          </DropdownItem>
          <DropdownItem>
            <LogoutIcon height={16} width={16} /> Sign out
          </DropdownItem>
        </DropDownContent>
      </DropdownMenu>
    )
  },
}
