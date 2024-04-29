import { baseQueryWithReauth } from '@/shared/api/base-query-with-reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['Me', 'Decks', 'Learn', 'Deck', 'Cards'],
})
