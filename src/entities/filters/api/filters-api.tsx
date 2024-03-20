import { MinMaxResponse } from '@/entities/filters/model/types'
import { baseApi } from '@/shared/api/base-api'

export const filtersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getMinMax: build.query<MinMaxResponse, void>({
      query: () => ({ method: 'GET', url: '/v2/decks/min-max-cards' }),
    }),
  }),
})

export const { useGetMinMaxQuery } = filtersApi
