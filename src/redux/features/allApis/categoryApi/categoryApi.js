import baseApi from "../../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add category
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),

    // get categories
    getCategories: builder.query({
      query: () => "/categories",
      providesTags: ["categories"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
} = categoryApi;
