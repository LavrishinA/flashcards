import { useSearchParams } from 'react-router-dom'

import { PaginationProps } from '@/entities/decks'
import { Pagination } from '@/shared/ui/Pagination/Pagination'
import { Select, SelectItem } from '@/shared/ui/Select'

import s from './PaginationList.module.scss'

type Props = {
  pagination: PaginationProps
}

export const PaginationList = ({ pagination }: Props) => {
  const { currentPage, itemsPerPage, totalItems } = pagination

  const [searchParams, setSearchParams] = useSearchParams()

  const itemsPerPageHandler = (value: string) => {
    searchParams.set('itemsPerPage', `${value}`)
    searchParams.set('currentPage', `1`)
    setSearchParams(searchParams)
  }

  const currentPageHandler = (value: number) => {
    searchParams.set('currentPage', `${value}`)
    setSearchParams(searchParams)
  }

  return (
    <div className={s.container}>
      <div>
        <Pagination
          currentPage={currentPage}
          onPageChange={currentPageHandler}
          pageSize={Number(itemsPerPage)}
          totalCount={totalItems}
        />
      </div>
      <div className={s.pageSize}>
        Показать
        <Select onValueChange={itemsPerPageHandler} value={String(itemsPerPage)} variant={'sm'}>
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
}
