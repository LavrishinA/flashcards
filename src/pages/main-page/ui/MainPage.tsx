import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useGetDecksQuery } from '@/entities/decks'
import { DeckList } from '@/widgets/deck-list/DeckList'
import { PaginationList } from '@/widgets/pagination-list/PaginationList'

export const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    currentPage: '1',
    itemsPerPage: '10',
  })
  const params = Object.fromEntries(searchParams)
  const { data } = useGetDecksQuery(params)

  useEffect(() => {
    setSearchParams(searchParams)
  }, [])

  return (
    <div>
      {data?.items && <DeckList decks={data.items} />}
      {data?.pagination && <PaginationList pagination={data.pagination} />}
    </div>
  )
}
