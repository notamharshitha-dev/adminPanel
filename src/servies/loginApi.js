import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hospital-hrshta.onrender.com' }),
  endpoints: (builder) => ({
    getUserLoginByName: builder.mutation({
      query: (User) => ({
            url:"/login",
            method:"POST",
            body:User
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserLoginByNameMutation } = loginApi