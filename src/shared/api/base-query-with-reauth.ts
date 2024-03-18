import { redirect } from 'react-router-dom'

import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es/',
  credentials: 'include',
})

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery(
      { method: 'POST', url: '/v1/auth/refresh-token' },
      api,
      extraOptions
    )

    if (refreshResult.meta?.response?.status === 204) {
      result = await baseQuery(args, api, extraOptions)
    } else {
      redirect('/login') //?
    }
  }

  //todo mutex, test redirect
  return result
}
