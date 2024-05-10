import {
  Card,
  CardsIntoDeckPayload,
  CardsIntoDeckResponse,
  Deck,
  DecksPayload,
  DecksResponse,
  DeleteDeckResponse,
  GetCardResponse,
  SaveGradePayload,
  SaveGradeResponse,
} from '@/entities/decks/model/types'
import { baseApi } from '@/shared/api/base-api'

export const decksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createCard: build.mutation<Card, { body: FormData; id: string }>({
      invalidatesTags: ['Deck'],
      query: ({ body, id }) => ({ body, method: 'POST', url: `/v1/decks/${id}/cards` }),
    }),
    createDeck: build.mutation<Deck, FormData>({
      invalidatesTags: ['Deck'],
      query: args => ({ body: args, method: 'POST', url: '/v1/decks' }),
    }),
    deleteDeck: build.mutation<DeleteDeckResponse, { id: string }>({
      invalidatesTags: ['Deck'],
      query: ({ id }) => ({ method: 'DELETE', url: `/v1/decks/${id}` }),
    }),
    editDeck: build.mutation<Deck, { body: FormData; id: string }>({
      invalidatesTags: (_result, _error, arg) => [{ id: arg.id, type: 'Deck' }],
      query: ({ body, id }) => ({ body, method: 'PATCH', url: `/v1/decks/${id}` }),
    }),
    getCardsIntoDeck: build.query<CardsIntoDeckResponse, CardsIntoDeckPayload>({
      providesTags: ['Deck'],
      query: ({ id, ...params }) => ({
        method: 'GET',
        params,
        url: `/v1/decks/${id}/cards`,
      }),
    }),
    getDeckById: build.query<Deck, { id: string }>({
      providesTags: ['Deck'],
      query: ({ id }) => ({ method: 'GET', url: `/v1/decks/${id}` }),
    }),
    getDecks: build.query<DecksResponse, DecksPayload | void>({
      providesTags: result =>
        result
          ? [...result.items.map(deck => ({ id: deck.id, type: 'Deck' as const })), 'Deck']
          : ['Deck'],
      query: params => ({ method: 'GET', params: params || undefined, url: '/v2/decks' }),
    }),
    getRandomCard: build.query<GetCardResponse, { id: string }>({
      query: ({ id }) => ({ method: 'GET', url: `/v1/decks/${id}/learn` }),
    }),
    saveGrade: build.mutation<SaveGradeResponse, SaveGradePayload>({
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const { data: newCard } = await queryFulfilled

          dispatch(decksApi.util.updateQueryData('getRandomCard', { id: id }, () => newCard))
        } catch {
          /* empty */
        }
      },
      query: ({ id, ...body }) => ({
        body,
        method: 'POST',
        url: `/v1/decks/${id}/learn`,
      }),
    }),
  }),
})

export const {
  useCreateCardMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useEditDeckMutation,
  useGetCardsIntoDeckQuery,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useGetRandomCardQuery,
  useSaveGradeMutation,
} = decksApi
