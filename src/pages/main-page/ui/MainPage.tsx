import { useSearchParams } from 'react-router-dom'

import { useGetDecksQuery } from '@/entities/decks'
import { useMeQuery } from '@/entities/user'
import { CreateDeck } from '@/features/decks/create-deck/ui/CreateDeck'
import { useDebounce } from '@/shared/lib/useDebounce'
import { Typography } from '@/shared/ui/Typography'
import { DeckList } from '@/widgets/deck-list/DeckList'
import { FilterList } from '@/widgets/filter-list/FilterList'
import { PaginationList } from '@/widgets/pagination-list/PaginationList'

import s from './MainPage.module.scss'

export const MainPage = () => {
  const [searchParams] = useSearchParams()

  const debouncedValue = useDebounce<string>(searchParams.get('name') || '', 500)

  const params = Object.fromEntries(searchParams)

  const { data: decks, isFetching } = useGetDecksQuery({ ...params, name: debouncedValue })
  const { data: user } = useMeQuery()

  return (
    <section>
      <div className={s.mainPageHeader}>
        <Typography variant={'h1'}>Deck list</Typography>
        <CreateDeck />
      </div>
      {user && <FilterList userId={user.id} />}
      {user && decks?.items && (
        <DeckList currentUser={user.id} decks={decks.items} loading={isFetching} />
      )}
      {decks?.pagination && <PaginationList pagination={decks.pagination} />}
    </section>
  )
}
