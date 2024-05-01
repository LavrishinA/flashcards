import { Card } from '@/entities/decks/model/types'

export type FormValues = {
  answer: string
  id: string
  question: string
}

export type Props = {
  card: Card
  onSubmit: (data: FormValues) => void
}
