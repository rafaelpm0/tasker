import { api } from '../api'


export const taskerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCorreio: builder.query({
      query: () => '/01001000/json',
    }),
    // ...outros endpoints relacionados a usuários
  }),
})

export const { useGetCorreioQuery } = taskerApi