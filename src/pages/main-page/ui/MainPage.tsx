import { useSearchParams } from 'react-router-dom'

import { useGetDecksQuery } from '@/entities/decks'
import { CreateDeckModal } from '@/features/create-deck/ui/CreateDeckModal'
import { Typography } from '@/shared/ui/Typography'
import { DeckList } from '@/widgets/deck-list/DeckList'
import { FilterList } from '@/widgets/filter-list/FilterList'
import { PaginationList } from '@/widgets/pagination-list/PaginationList'

export const MainPage = () => {
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  const { data } = useGetDecksQuery(params)

  return (
    <div>
      <Typography variant={'h1'}>Deck list</Typography>
      <FilterList />
      <CreateDeckModal />
      {data?.items && <DeckList decks={data.items} />}
      {data?.pagination && <PaginationList pagination={data.pagination} />}
    </div>
  )
}
