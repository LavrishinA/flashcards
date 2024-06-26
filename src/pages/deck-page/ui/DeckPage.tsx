import { Link, useParams, useSearchParams } from 'react-router-dom'

import { useGetCardsIntoDeckQuery, useGetDeckByIdQuery } from '@/entities/decks/api/decks-api'
import { Deck } from '@/entities/decks/model/types'
import { useMeQuery } from '@/entities/user'
import { CreateCard } from '@/features/cards/create-card/ui/CreateCard'
import { DeckMenu } from '@/features/deck-menu/DeckMenu'
import { SearchCards } from '@/features/filters/ui/SearchCards'
import { PreviousPage } from '@/shared/lib/PreviousPage/PreviousPage'
import { useDebounce } from '@/shared/lib/useDebounce'
import { Button } from '@/shared/ui/Button'
import { Loader } from '@/shared/ui/Loader'
import { Typography } from '@/shared/ui/Typography'
import { CardsList } from '@/widgets/cards-list/CardsList'
import { PaginationList } from '@/widgets/pagination-list/PaginationList'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

import s from './DeckPage.module.scss'

export const DeckPage = () => {
  const { deckId = '' } = useParams()

  const [searchParams] = useSearchParams()

  const debouncedValue = useDebounce<string>(searchParams.get('question') || '', 500)

  const params = Object.fromEntries(searchParams)

  const { data: user } = useMeQuery()
  const { data: deck, isLoading } = useGetDeckByIdQuery({ id: deckId })
  const { data: cards, isFetching } = useGetCardsIntoDeckQuery({
    ...params,
    id: deckId,
    question: debouncedValue,
  })

  const isOwner = deck?.userId === user?.id

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <PreviousPage />
          <div className={s.container}>
            <div className={s.name}>
              <Typography variant={'h1'}>{deck?.name}</Typography>
              {isOwner && <DeckMenu deck={deck || ({} as Deck)} id={deckId} />}
            </div>
            {isOwner ? (
              <CreateCard deckId={deckId} />
            ) : (
              <>
                {deck && deck.cardsCount !== 0 && (
                  <Button as={Link} to={`/${deck?.id}/learn`}>
                    Learn To Deck
                  </Button>
                )}
              </>
            )}
          </div>
          {deck?.cover && (
            <div className={s.ratioContainer}>
              <AspectRatio ratio={25 / 15}>
                <img alt={'cover'} className={s.image} loading={'lazy'} src={deck?.cover} />
              </AspectRatio>
            </div>
          )}
          {deck && deck.cardsCount === 0 ? (
            <Typography className={s.emptyDeck} variant={'h2'}>
              This pack is empty.
            </Typography>
          ) : (
            <div className={s.mainContent}>
              <div>
                <SearchCards name={'question'} />
              </div>
              <div>
                {deck && cards?.items && (
                  <CardsList cards={cards.items} currentDeck={deck.id} loadingCards={isFetching} />
                )}
                {cards?.pagination && <PaginationList pagination={cards.pagination} />}
              </div>
            </div>
          )}
        </section>
      )}
    </>
  )
}
