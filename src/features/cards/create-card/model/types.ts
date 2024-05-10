import { Card } from '@/entities/decks/model/types'
import { CardFormValues } from '@/features/cards/create-card/model/card-form-zod-schema'

// export type FormValues = {
//   answer: string
//   answerImg?: FileList | null
//   question: string
//   questionImg?: FileList | null
// }

export type Props = {
  card?: Card
  onSubmit: (data: CardFormValues) => void
}
