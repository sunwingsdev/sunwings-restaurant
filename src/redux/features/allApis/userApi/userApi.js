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
  }),
});

export const { useAddUserMutation } = userApi;
