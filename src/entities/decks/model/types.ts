export type DecksResponse = {
  items: DeckItem[]
  maxCardsCount: number
  pagination: Pagination
}

export type DecksPayload = {
  currentPage?: string
  itemsPerPage?: string
}

export type SaveGradePayload = {
  cardId: string
  grade: number
  id: string
}

export type SaveGradeResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type DeleteDeckResponse = {
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type GetCardResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type DeckItem = {
  author: Author
  cardsCount: number
  cover?: string
  created: Date
  id: string
  isPrivate: boolean
  name: string
  updated: Date
  userId: string
}

type Author = {
  id: string
  name: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
