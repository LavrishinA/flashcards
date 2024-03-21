import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es/',
  credentials: 'include',
})

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let result = await baseQuery(args, api, extraOptions)

  if (!mutex.isLocked()) {
    const release = await mutex.acquire()

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
        window.location.href = 'sign-in'
      }
    }

    release()
  } else {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()
    result = await baseQuery(args, api, extraOptions)
  }

  return result
}
