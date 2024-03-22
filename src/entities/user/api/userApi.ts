import { userLoginPayload, userMeResponse } from '@/entities/user/model/types'
import { baseApi } from '@/shared/api/base-api'

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<void, userLoginPayload>({
      invalidatesTags: ['Me'],
      query: user => ({ body: user, method: 'POST', url: '/v1/auth/login' }),
    }),
    logout: build.mutation<void, void>({
      invalidatesTags: ['Me'],
      query: () => ({ method: 'POST', url: '/v1/auth/logout' }),
    }),
    me: build.query<userMeResponse, void>({
      providesTags: ['Me'],
      query: () => ({ method: 'GET', url: '/v1/auth/me' }),
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation, useMeQuery } = userApi
