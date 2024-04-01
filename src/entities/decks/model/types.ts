export type DecksResponse = {
  items: DeckItem[]
  maxCardsCount: number
  pagination: Pagination
}

export type DecksPayload = {
  currentPage?: string
  itemsPerPage?: string
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

export type CreateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}
