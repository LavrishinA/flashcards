export type DecksResponse = {
  items: DeckItem[]
  maxCardsCount: number
  pagination: Pagination
}

type DeckItem = {
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

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
