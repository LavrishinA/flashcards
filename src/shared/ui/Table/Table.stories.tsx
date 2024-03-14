import type { Meta, StoryObj } from '@storybook/react'

import { Rating } from '@/shared/ui/Rating'
import { Table } from '@/shared/ui/Table/Table'

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta

type Story = StoryObj<typeof meta>

export const TableDefault: Story = {
  render: () => {
    return (
      <Table.Root>
        <Table.TableHeader>
          <Table.TableRow>
            <Table.TableCellHead>Name</Table.TableCellHead>
            <Table.TableCellHead>Mail</Table.TableCellHead>
            <Table.TableCellHead>City</Table.TableCellHead>
            <Table.TableCellHead>Country</Table.TableCellHead>
            <Table.TableCellHead>Rating</Table.TableCellHead>
            <Table.TableCellHead>Actions</Table.TableCellHead>
          </Table.TableRow>
        </Table.TableHeader>
        <Table.TableBody>
          <Table.TableRow>
            <Table.TableCell>Christmas</Table.TableCell>
            <Table.TableCell>Christmas@gmail.com</Table.TableCell>
            <Table.TableCell>Minsk</Table.TableCell>
            <Table.TableCell>BLR</Table.TableCell>
            <Table.TableCell>
              <Rating maxStar={5} onClick={() => {}} rating={3} size={16} />
            </Table.TableCell>
            <Table.TableCell>x</Table.TableCell>
          </Table.TableRow>
        </Table.TableBody>
      </Table.Root>
    )
  },
}
