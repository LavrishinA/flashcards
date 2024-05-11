import { DeleteCardArgs } from '@/entities/cards/model/types'
import { CardsIntoDeckResponse } from '@/entities/decks/model/types'
import { baseApi } from '@/shared/api/base-api'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    deleteCard: build.mutation<void, DeleteCardArgs>({
      invalidatesTags: ['Deck'],
      query: ({ id }) => ({ method: 'DELETE', url: `/v1/cards/${id}` }),
    }),
    // updateCard: build.mutation<Card, { body: CardBodyArgs; id: string }>({
    //   invalidatesTags: ['Deck'],
    //   query: ({ body, id }) => ({ body, method: 'PATCH', url: `/v1/cards/${id}` }),
    // }),
    updateCard: build.mutation<CardsIntoDeckResponse, { data: FormData; id: string }>({
      invalidatesTags: ['Deck'],
      query: ({ data, id }) => ({ body: data, method: 'PATCH', url: `/v1/cards/${id}` }),
    }),
  }),
})

export const { useDeleteCardMutation, useUpdateCardMutation } = cardsApi
