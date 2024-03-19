import { DecksResponse } from '@/entities/decks/model/types'
import { baseApi } from '@/shared/api/base-api'

export const decksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getDecks: build.query<DecksResponse, void>({
      query: () => ({ method: 'GET', url: '/v1/decks' }),
    }),
  }),
})

export const { useGetDecksQuery } = decksApi
