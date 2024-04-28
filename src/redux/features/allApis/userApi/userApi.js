import baseApi from "../../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add user
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // get all users
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),

    // get a user by uid
    getAUserByUID: builder.query({
      query: (uid) => `users/${uid}`,
      providesTags: ["users"],
    }),

    // delete a user by uid
    deleteAUserByUID: builder.mutation({
      query: (uid) => ({
        url: `users/${uid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetAllUsersQuery,
  useGetAUserByUIDQuery,
  useDeleteAUserByUIDMutation,
} = userApi;
