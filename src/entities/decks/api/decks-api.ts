import {
  CardsIntoDeckPayload,
  CardsIntoDeckResponse,
  Deck,
  DeckItem,
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
    createDeck: build.mutation<DeckItem, FormData>({
      invalidatesTags: ['Decks'],
      query: args => ({ body: args, method: 'POST', url: '/v1/decks' }),
    }),
    deleteDeck: build.mutation<DeleteDeckResponse, { id: string }>({
      invalidatesTags: ['Decks'],
      query: ({ id }) => ({ method: 'DELETE', url: `/v1/decks/${id}` }),
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
      providesTags: ['Decks'],
      query: params => ({ method: 'GET', params: params ?? undefined, url: '/v1/decks' }),
    }),
    getRandomCard: build.query<GetCardResponse, { id: string }>({
      providesTags: ['Learn'],
      query: ({ id }) => ({ method: 'GET', url: `/v1/decks/${id}/learn` }),
    }),
    saveGrade: build.mutation<SaveGradeResponse, SaveGradePayload>({
      invalidatesTags: ['Learn'],
      query: ({ id, ...body }) => ({
        body,
        method: 'POST',
        url: `/v1/decks/${id}/learn`,
      }),
    }),
  }),
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsIntoDeckQuery,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useGetRandomCardQuery,
  useSaveGradeMutation,
} = decksApi
