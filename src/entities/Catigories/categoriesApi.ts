import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../base_url";

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (builder) =>({
    getCategories: builder.query({
      query: () => 'Categories'
    })
  })
})

export const {useGetCategoriesQuery} = categoriesApi;