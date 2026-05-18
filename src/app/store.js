import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loginApi } from '../servies/loginApi'
import { addDoctorApi } from '../servies/addDoctorApi'
import { signUpApi } from '../servies/signUpApi'

export const store = configureStore({
  reducer: {
    //[pokemonApi.reducerPath]: pokemonApi.reducer,
    [loginApi.reducerPath]:loginApi.reducer,
    [addDoctorApi.reducerPath]:addDoctorApi.reducer,
    [signUpApi.reducerPath]:signUpApi.reducer
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware,addDoctorApi.middleware,signUpApi.middleware),
})
setupListeners(store.dispatch)