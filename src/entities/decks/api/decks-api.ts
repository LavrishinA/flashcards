import { DeckItem, DecksPayload, DecksResponse } from '@/entities/decks/model/types'
import { baseApi } from '@/shared/api/base-api'

export const decksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createDeck: build.mutation<DeckItem, FormData>({
      invalidatesTags: ['Decks'],
      query: args => ({ body: args, method: 'POST', url: '/v1/decks' }),
    }),
    getDecks: build.query<DecksResponse, DecksPayload | void>({
      providesTags: ['Decks'],
      query: params => ({ method: 'GET', params: params ?? undefined, url: '/v1/decks' }),
    }),
  }),
})

export const { useCreateDeckMutation, useGetDecksQuery } = decksApi
