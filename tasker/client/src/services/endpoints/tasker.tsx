import { api } from '../api'

export const taskerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTypeService: builder.query({
      query: () => '/type-service',
    }),
    getClient: builder.query({
      query: () => '/clients',
    }),
    deleteTypeService: builder.mutation({
      query: (id: number) => ({
        url: `/type-service/${id}`,
        method: 'DELETE',
      }),
    }),
    getServices: builder.query({
      query: () => ({
        url: '/service',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetTypeServiceQuery,
  useDeleteTypeServiceMutation,
  useGetClientQuery,
  useGetServicesQuery
} = taskerApi;