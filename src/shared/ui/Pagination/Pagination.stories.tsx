import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/shared/ui/Pagination/Pagination'

import { Select, SelectItem } from '../Select'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const PaginationDefault: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState('10')

    return (
      <div style={{ alignItems: 'center', display: 'flex', gap: '30px' }}>
        <div>
          <Pagination
            currentPage={currentPage}
            onPageChange={page => setCurrentPage(page)}
            pageSize={Number(pageSize)}
            totalCount={100}
          />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
          Показать
          <Select onValueChange={value => setPageSize(value)} value={pageSize} variant={'sm'}>
            <SelectItem value={'10'} variant={'sm'}>
              10
            </SelectItem>
            <SelectItem value={'20'} variant={'sm'}>
              20
            </SelectItem>
            <SelectItem value={'30'} variant={'sm'}>
              30
            </SelectItem>
          </Select>
          на странице
        </div>
      </div>
    )
  },
}
