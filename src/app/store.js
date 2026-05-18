import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loginApi } from '../servies/loginApi'

export const store = configureStore({
  reducer: {
    //[pokemonApi.reducerPath]: pokemonApi.reducer,
    [loginApi.reducerPath]:loginApi.reducer
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
})
setupListeners(store.dispatch)