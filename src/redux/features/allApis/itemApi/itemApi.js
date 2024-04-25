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

    // edit a item
    editItem: builder.mutation({
      query: (itemData) => ({
        url: `/item/edit/${itemData?.id}`,
        method: "PUT",
        body: itemData?.data,
      }),
      invalidatesTags: ["item"],
    }),

    // get a single item
    getSingleItem: builder.query({
      query: (id) => `/item/single-item/${id}`,
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
export const {
  useGetItemsQuery,
  useGetSingleItemQuery,
  useAddItemMutation,
  useDeleteItemMutation,
  useEditItemMutation,
} = itemApi;
