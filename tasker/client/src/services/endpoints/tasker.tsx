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
    deleteService: builder.mutation({
      query: (id: number) => ({
        url: `/service/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteClient: builder.mutation({
      query: (id: number) => ({
        url: `/clients/${id}`,
        method: 'DELETE',
      }),
    }),
    getServices: builder.query({
      query: () => ({
        url: '/service',
        method: 'GET',
      }),
    }),
    postTypeClient: builder.mutation({
      query: (body) => ({
        url: `/type-service/`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetTypeServiceQuery,
  useDeleteTypeServiceMutation,
  useGetClientQuery,
  useGetServicesQuery,
  useDeleteClientMutation,
  useDeleteServiceMutation,
  usePostTypeClientMutation,
} = taskerApi;