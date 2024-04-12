import { Link, useParams, useSearchParams } from 'react-router-dom'

import { useGetCardsIntoDeckQuery, useGetDeckByIdQuery } from '@/entities/decks/api/decks-api'
import { SearchCards } from '@/features/filters/ui/SearchCards'
import { PreviousPage } from '@/shared/lib/PreviousPage/PreviousPage'
import { useDebounce } from '@/shared/lib/useDebounce'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'
import { CardsList } from '@/widgets/cards-list/CardsList'
import { PaginationList } from '@/widgets/pagination-list/PaginationList'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

import s from './DeckPage.module.scss'

export const DeckPage = () => {
  const { deckId } = useParams()

  const [searchParams] = useSearchParams()

  const debouncedValue = useDebounce<string>(searchParams.get('question') || '', 500)

  const params = Object.fromEntries(searchParams)

  const { data: deck } = useGetDeckByIdQuery({ id: deckId ?? '' })
  const { data: cards } = useGetCardsIntoDeckQuery({
    ...params,
    id: deckId ?? '',
    question: debouncedValue,
  })

  return (
    <section>
      <div>
        <PreviousPage />
      </div>
      <div className={s.container}>
        <Typography variant={'h1'}>{deck?.name}</Typography>
        <Button as={Link} to={`/${deck?.id}/learn/${deck?.name}`}>
          Learn To Deck
        </Button>
      </div>
      <div className={s.imgInputArea}>
        {deck?.cover && (
          <div className={s.ratioContainer}>
            <AspectRatio ratio={25 / 15}>
              <img alt={''} className={s.image} loading={'lazy'} src={deck?.cover} />
            </AspectRatio>
          </div>
        )}
        <SearchCards name={'question'} />
      </div>
      {deck && cards?.items && <CardsList cards={cards.items} currentDeck={deck.id} />}
      {cards?.pagination && <PaginationList pagination={cards.pagination} />}
    </section>
  )
}
