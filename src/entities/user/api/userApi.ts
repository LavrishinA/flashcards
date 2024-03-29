import { SignUpPayload, userLoginPayload, userMeResponse } from '@/entities/user/model/types'
import { baseApi } from '@/shared/api/base-api'

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<void, userLoginPayload>({
      invalidatesTags: ['Me'],
      query: user => ({ body: user, method: 'POST', url: '/v1/auth/login' }),
    }),
    logout: build.mutation<void, void>({
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
    updateProfile: build.mutation<userMeResponse, FormData>({
      invalidatesTags: ['Me'],
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        let avatar

        const patchResult = dispatch(
          userApi.util.updateQueryData('me', undefined, draft => {
            const name = body.get('name') as string
            const avatarFile = body.get('avatar')

            if (draft && avatarFile instanceof File) {
              avatar = URL.createObjectURL(avatarFile)
              draft.avatar = URL.createObjectURL(avatarFile)
            }

            if (draft && name) {
              draft.name = name
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        } finally {
          avatar && URL.revokeObjectURL(avatar)
        }
      },
      query: data => ({ body: data, method: 'PATCH', url: '/v1/auth/me' }),
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useSignUpMutation,
  useUpdateProfileMutation,
} = userApi
