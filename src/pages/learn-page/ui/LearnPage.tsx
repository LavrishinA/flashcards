import { useParams } from 'react-router-dom'

import { useGetRandomCardQuery, useSaveGradeMutation } from '@/entities/decks'
import { useGetDeckByIdQuery } from '@/entities/decks/api/decks-api'
import { SetGrade } from '@/features/set-grade'
import { PreviousPage } from '@/shared/lib/PreviousPage/PreviousPage'
import { LearnCard } from '@/widgets/learn-card/LearnCard'

export const LearnPage = () => {
  const { deckId } = useParams()

  const { data: card } = useGetRandomCardQuery({ id: deckId ?? '' })
  const { data: deck } = useGetDeckByIdQuery({ id: deckId ?? '' })
  const [saveGrade] = useSaveGradeMutation()

  const onSaveGradeHandler = (value: string) => {
    if (!card) {
      return
    }

    const body = {
      cardId: card.id,
      grade: Number(value),
      id: deckId ?? '',
    }

    saveGrade(body)
  }

  return (
    <section>
      <PreviousPage />
      {card && deck && (
        <LearnCard key={card.id} {...card} deckName={deck.name}>
          <SetGrade onSave={onSaveGradeHandler} />
        </LearnCard>
      )}
    </section>
  )
}
