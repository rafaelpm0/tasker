import { api } from '../api'

export const taskerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTypeService: builder.query({
      query: () => '/type-service',
    }),
    deleteTypeService: builder.mutation({
      query: (id: number) => ({
        url: `/type-service/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetTypeServiceQuery, useDeleteTypeServiceMutation } = taskerApi