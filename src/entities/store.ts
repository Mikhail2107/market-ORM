import { configureStore } from "@reduxjs/toolkit";
import {categoriesApi} from "./Catigories/categoriesApi";
import { productsApi } from "./Products/productsApi";

export const store = configureStore({
  reducer: {
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
},
middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(categoriesApi.middleware).concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch