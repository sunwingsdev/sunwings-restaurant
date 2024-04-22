import baseApi from "../../baseApi";

const itemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add item to db
    addItem: builder.mutation({
      query: (data) => ({
        url: "/item",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["item"],
    }),

    // get items
    getItems: builder.query({
      query: () => "/item",
      providesTags: ["item"],
    }),

    // delete a item
    deleteItem: builder.mutation({
      query: (id) => ({ url: `/item/${id}`, method: "DELETE" }),
      invalidatesTags: ["item"],
    }),
  }),
});
export const { useGetItemsQuery, useAddItemMutation, useDeleteItemMutation } =
  itemApi;
