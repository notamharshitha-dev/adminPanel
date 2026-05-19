import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const allAppointmentsApi = createApi({
  reducerPath: 'allAppointmentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hospital-appointment-system-jxhx.onrender.com/allAppointments' }),
  endpoints: (builder) => ({
   getAllAppointmentsByName: builder.query({
      query: () => "/",
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllAppointmentsByNameQuery} = allAppointmentsApi