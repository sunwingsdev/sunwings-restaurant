import baseApi from "../../baseApi";

const mainCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add main category
    addMainCategory: builder.mutation({
      query: (data) => ({
        url: "/mainCategories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["mainCategory"],
    }),

    // get all main categories
    getMainCategories: builder.query({
      query: () => "/mainCategories",
      providesTags: ["mainCategory"],
    }),

    // delete a main category
    deleteMainCategory: builder.mutation({
      query: (id) => ({
        url: `mainCategories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["mainCategory"],
    }),
  }),
});

export const {
  useAddMainCategoryMutation,
  useGetMainCategoriesQuery,
  useDeleteMainCategoryMutation,
} = mainCategoryApi;
