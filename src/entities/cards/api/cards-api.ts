import { DeleteCardArgs } from '@/entities/cards/model/types'
import { baseApi } from '@/shared/api/base-api'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    deleteCard: build.mutation<void, DeleteCardArgs>({
      invalidatesTags: ['Cards'],
      query: ({ id }) => ({ method: 'DELETE', url: `/v1/cards/${id}` }),
    }),
  }),
})

export const { useDeleteCardMutation } = cardsApi
