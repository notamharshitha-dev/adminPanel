import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hpa-backend-8nxf.onrender.com/login' }),
  endpoints: (builder) => ({
    getUserLoginByName: builder.mutation({
      query: (User) => ({
            url:"/",
            method:"POST",
            body:User
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserLoginByNameMutation } = loginApi