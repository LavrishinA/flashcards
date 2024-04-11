import { useParams } from 'react-router-dom'

import { useGetRandomCardQuery, useSaveGradeMutation } from '@/entities/decks'
import { SetGrade } from '@/features/set-grade'
import { PreviousPage } from '@/shared/lib/PreviousPage/PreviousPage'
import { LearnCard } from '@/widgets/learn-card/LearnCard'

export const LearnPage = () => {
  const { deckId } = useParams()

  const { data: card } = useGetRandomCardQuery({ id: deckId ?? '' })
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
      {card && (
        <LearnCard key={card.id} {...card}>
          <SetGrade onSave={onSaveGradeHandler} />
        </LearnCard>
      )}
    </section>
  )
}
