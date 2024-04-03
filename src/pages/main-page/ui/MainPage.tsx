import { useSearchParams } from 'react-router-dom'

import { useGetDecksQuery } from '@/entities/decks'
import { useDebounce } from '@/shared/lib/useDebounce'
import { Typography } from '@/shared/ui/Typography'
import { DeckList } from '@/widgets/deck-list/DeckList'
import { FilterList } from '@/widgets/filter-list/FilterList'
import { PaginationList } from '@/widgets/pagination-list/PaginationList'

export const MainPage = () => {
  const [searchParams] = useSearchParams()

  const debouncedValue = useDebounce<string>(searchParams.get('name') || '', 500)

  const params = Object.fromEntries(searchParams)

  const { data } = useGetDecksQuery({ ...params, name: debouncedValue })

  return (
    <div>
      <Typography variant={'h1'}>Deck list</Typography>
      <FilterList />
      {data?.items && <DeckList decks={data.items} />}
      {data?.pagination && <PaginationList pagination={data.pagination} />}
    </div>
  )
}
