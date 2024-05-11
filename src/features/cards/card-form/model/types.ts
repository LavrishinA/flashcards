import { Card } from '@/entities/decks/model/types'

export type FormValues = {
  answer: string
  answerImg?: FileList | null
  question: string
  questionImg?: FileList | null
}

export type Props = {
  card?: Card
  onSubmit: (data: FormData) => void
}
