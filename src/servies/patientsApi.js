import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const patientsApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hospital-hrshta.onrender.com/allPatients' }),
  endpoints: (builder) => ({
   getAllPatientsByName: builder.query({
      query: () => "/",
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPatientsByNameQuery} = patientsApi