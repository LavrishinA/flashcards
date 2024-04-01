import { CreateDeckArgs, DeckItem, DecksPayload, DecksResponse } from '@/entities/decks/model/types'
import { baseApi } from '@/shared/api/base-api'

export const decksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createDeck: build.mutation<DeckItem, CreateDeckArgs>({
      invalidatesTags: ['Decks'],
      query: body => ({ body, method: 'POST', url: '/v1/decks' }),
    }),
    getDecks: build.query<DecksResponse, DecksPayload | void>({
      providesTags: ['Decks'],
      query: params => ({ method: 'GET', params: params ?? undefined, url: '/v1/decks' }),
    }),
  }),
})

export const { useCreateDeckMutation, useGetDecksQuery } = decksApi
