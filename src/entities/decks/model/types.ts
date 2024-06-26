export type DecksResponse = {
  items: Deck[]
  maxCardsCount: number
  pagination: Pagination
}

export type DecksPayload = {
  authorId?: string
  currentPage?: string
  itemsPerPage?: string
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type SaveGradePayload = {
  cardId: string
  grade: number
  id: string
}

export type DeleteDeckResponse = {
  cardsCount: number
  cover: string
  created: Date
  id: string
  isPrivate: boolean
  name: string
  updated: Date
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
  updated: Date
  userId: string
}

export type Deck = {
  author: Author
  cardsCount: number
  cover: null | string
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

export type CreateDeckArgs = {
  cover?: FileList
  isPrivate?: boolean
  name: string
}

export type CardsIntoDeckResponse = {
  items: Card[]
  pagination: Pagination
}

export type Card = {
  answer: string
  answerImg: null | string
  answerVideo: null | string
  created: Date
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: null | string
  questionVideo: null | string
  shots: number
  updated: Date
  userId: string
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
  updated: Date
  userId: string
}

export type CardsIntoDeckPayload = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: string
  question?: string
}

export type CreateCardArgs = {
  answer: string
  answerImg?: string
  answerVideo?: string
  id: string
  question: string
  questionImg?: string
  questionVideo?: string
}
