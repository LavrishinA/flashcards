import { Link, useParams } from 'react-router-dom'

import { useGetCardsIntoDeckQuery, useGetDeckByIdQuery } from '@/entities/decks/api/decks-api'
import { SearchCards } from '@/features/filters/ui/SearchCards'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'
import { CardsList } from '@/widgets/cards-list/CardsList'
import { PaginationList } from '@/widgets/pagination-list/PaginationList'

export const DeckPage = () => {
  const { deckId } = useParams()

  const { data: deck } = useGetDeckByIdQuery({ id: deckId ?? '' })
  const { data: cards } = useGetCardsIntoDeckQuery({ id: deckId ?? '' })

  return (
    <section>
      <Typography variant={'h1'}>{deck?.name}</Typography>
      <Button as={Link} to={`/:${deckId}/learn/:${deck?.name}`}>
        Learn To Deck
      </Button>
      <SearchCards />
      {deck && cards?.items && <CardsList cards={cards.items} currentDeck={deck.id} />}
      {cards?.pagination && <PaginationList pagination={cards.pagination} />}
    </section>
  )
}
