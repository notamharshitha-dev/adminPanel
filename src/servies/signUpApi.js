import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const signUpApi = createApi({
  reducerPath: 'signUpApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hpa-backend-8nxf.onrender.com/signUp' }),
  endpoints: (builder) => ({
    getAdminSignUpName: builder.mutation({
      query: (admin) => ({
            url:"/",
            method:"POST",
            body:admin
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAdminSignUpNameMutation } = signUpApi