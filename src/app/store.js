import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loginApi } from '../servies/loginApi'
import { addDoctorApi } from '../servies/addDoctorApi'
import { signUpApi } from '../servies/signUpApi'
import { allAppointmentsApi } from '../servies/appiontmentsApi'
import { patientsApi } from '../servies/patientsApi'

export const store = configureStore({
  reducer: {
    //[pokemonApi.reducerPath]: pokemonApi.reducer,
    [loginApi.reducerPath]:loginApi.reducer,
    [addDoctorApi.reducerPath]:addDoctorApi.reducer,
    [signUpApi.reducerPath]:signUpApi.reducer,
    [allAppointmentsApi.reducerPath]:allAppointmentsApi.reducer,
    [patientsApi.reducerPath]:patientsApi.reducer
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware,addDoctorApi.middleware,signUpApi.middleware,allAppointmentsApi.middleware,patientsApi.middleware),
})
setupListeners(store.dispatch)