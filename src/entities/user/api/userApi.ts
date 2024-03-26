import { SignUpPayload, userLoginPayload, userMeResponse } from '@/entities/user/model/types'
import { baseApi } from '@/shared/api/base-api'

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<void, userLoginPayload>({
      invalidatesTags: ['Me'],
      query: user => ({ body: user, method: 'POST', url: '/v1/auth/login' }),
    }),
    logout: build.mutation<void, void>({
      invalidatesTags: ['Me'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(userApi.util.updateQueryData('me', _, () => {}))

        try {
          await queryFulfilled
          dispatch(userApi.util.resetApiState())
        } catch {
          patchResult.undo()
        }
      },
      query: () => ({ method: 'POST', url: '/v1/auth/logout' }),
    }),
    me: build.query<userMeResponse, void>({
      providesTags: ['Me'],
      query: () => ({ method: 'GET', url: '/v1/auth/me' }),
    }),
    signUp: build.mutation<userMeResponse, SignUpPayload>({
      query: user => ({ body: user, method: 'POST', url: '/v1/auth/sign-up' }),
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation, useMeQuery, useSignUpMutation } = userApi
