import { DeleteCardArgs, UpdateCardArgs } from '@/entities/cards/model/types'
import { Card } from '@/entities/decks/model/types'
import { baseApi } from '@/shared/api/base-api'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    deleteCard: build.mutation<void, DeleteCardArgs>({
      invalidatesTags: ['Deck'],
      query: ({ id }) => ({ method: 'DELETE', url: `/v1/cards/${id}` }),
    }),
    updateCard: build.mutation<Card, UpdateCardArgs>({
      invalidatesTags: ['Deck'],
      query: ({ id, ...args }) => ({ body: args, method: 'PATCH', url: `/v1/cards/${id}` }),
    }),
  }),
})

export const { useDeleteCardMutation, useUpdateCardMutation } = cardsApi
