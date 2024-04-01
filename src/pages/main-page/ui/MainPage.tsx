import { useSearchParams } from 'react-router-dom'

import { useGetDecksQuery } from '@/entities/decks'
import { useMeQuery } from '@/entities/user'
import { Typography } from '@/shared/ui/Typography'
import { DeckList } from '@/widgets/deck-list/DeckList'
import { FilterList } from '@/widgets/filter-list/FilterList'
import { PaginationList } from '@/widgets/pagination-list/PaginationList'

export const MainPage = () => {
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  const { data: decks } = useGetDecksQuery(params)
  const { data: user } = useMeQuery()

  return (
    <div>
      <Typography variant={'h1'}>Deck list</Typography>
      {user && <FilterList userId={user.id} />}
      {user && decks?.items && <DeckList currentUser={user.id} decks={decks.items} />}
      {decks?.pagination && <PaginationList pagination={decks.pagination} />}
    </div>
  )
}
