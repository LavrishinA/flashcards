import { DecksPayload, DecksResponse } from '@/entities/decks/model/types'
import { DeleteIconResponse } from '@/entities/user/model/types'
import { baseApi } from '@/shared/api/base-api'

export const decksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    deleteDeck: build.mutation<DeleteIconResponse, { id: string }>({
      invalidatesTags: ['Decks'],
      query: ({ id }) => ({ method: 'DELETE', url: `/v1/decks/${id}` }),
    }),
    getDecks: build.query<DecksResponse, DecksPayload | void>({
      providesTags: ['Decks'],
      query: params => ({ method: 'GET', params: params ?? undefined, url: '/v1/decks' }),
    }),
  }),
})

export const { useDeleteDeckMutation, useGetDecksQuery } = decksApi
