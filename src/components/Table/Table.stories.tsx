import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components/Table/Table'

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  tags: ['autodocs'],
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
            <Table.TableCell>5</Table.TableCell>
            <Table.TableCell>x</Table.TableCell>
          </Table.TableRow>
        </Table.TableBody>
      </Table.Root>
    )
  },
}
