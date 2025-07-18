import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../base_url";

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (builder) => ({
   getProducts: builder.query({
    query: () => 'products'
   })
  })
})

export const {useGetProductsQuery} = productsApi;