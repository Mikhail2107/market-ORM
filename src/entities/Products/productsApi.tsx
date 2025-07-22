import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../base_url";
import { ProductItemProps, ProductSearch } from '../../share/ui/interfaces';


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), 
  endpoints: (builder) => ({
    getProducts: builder.query<ProductItemProps[], { q: string; limit: number; skip: number }>({
      query: ({ q, limit, skip }) => `/products/search?q=${q}&limit=${limit}&skip=${skip}`,
      transformResponse: (response: ProductSearch) => response.products, 
    }),
    getProductById: builder.query<ProductItemProps, number>({
      query: (productId) => `/products/${productId}`,  
    }),
    
    getCart: builder.query({
      query: () => '/cart',
    }),     
  }),
});

export const { 
  useGetProductsQuery, 
  useGetProductByIdQuery,
  useGetCartQuery, 
} = productsApi;


// export const productsApi = createApi({
//   reducerPath: 'productsApi',
//   baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
//   endpoints: (builder) => ({
//    getProducts: builder.query({
//     query: () => 'products'
//    })
//   })
// })

// export const {useGetProductsQuery} = productsApi;