import { Card } from '@/entities/decks/model/types'

export type FormValues = {
  answer: string
  answerImg?: FileList | null | string
  question: string
  questionImg?: FileList | null | string
}

export type Props = {
  card: Card
  onSubmit: (data: FormValues) => void
}
