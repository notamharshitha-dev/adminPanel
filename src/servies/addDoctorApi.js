import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const addDoctorApi = createApi({
  reducerPath: 'addDoctorApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hospital-appointment-system-jxhx.onrender.com' }),
  endpoints: (builder) => ({
    getNewDoctorDetailsByName: builder.mutation({
      query: (newDoctor) => ({
            url:"/addDoctor",
            method:"POST",
            body:newDoctor,
            headers:{token:window.localStorage.getItem("token")}            
      }),
    }),
    DeleteDoctorDetailsByName: builder.mutation({
      query: (id) => ({
            url:"/deleteDoctor",
            method:"DELETE",
            body:{id},
            headers:{token:window.localStorage.getItem("token")}            
      }),
    }),
    getAllDoctorsByName: builder.query({
      query: () => "/doctors",
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewDoctorDetailsByNameMutation,useDeleteDoctorDetailsByNameMutation,useGetAllDoctorsByNameQuery,useLazyGetAllDoctorsByNameQuery } = addDoctorApi