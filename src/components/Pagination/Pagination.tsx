import { clsx } from 'clsx'

import s from './Pagination.module.scss'

import { usePagination } from './usePagination'

export type PaginationProps = {
  currentPage: number
  onPageChange: (p: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
}

export const Pagination = (props: PaginationProps) => {
  const { currentPage, onPageChange, pageSize, siblingCount = 1, totalCount } = props

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <nav className={clsx(s.paginationContainer)}>
      <button
        className={clsx(s.paginationItem, {
          [s.disabled]: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={clsx(s.arrow, s.left)} />
      </button>
      {paginationRange?.map(pageNumber => {
        if (pageNumber === 0) {
          return <span className={clsx(s.paginationItem, s.dots)}>&#8230;</span>
        }

        return (
          <button
            className={clsx(s.paginationItem, {
              [s.selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        )
      })}
      <button
        className={clsx(s.paginationItem, {
          [s.disabled]: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={clsx(s.arrow, s.right)} />
      </button>
    </nav>
  )
}
