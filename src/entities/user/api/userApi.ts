import { userLoginPayload, userMeResponse } from '@/entities/user/model/types'
import { baseApi } from '@/shared/api/base-api'

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<void, userLoginPayload>({
      query: user => ({ body: user, method: 'POST', url: '/v1/auth/login' }),
    }),
    me: build.query<userMeResponse, void>({
      query: () => ({ method: 'GET', url: '/v1/auth/me' }),
    }),
  }),
})

export const { useLoginMutation, useMeQuery } = userApi
