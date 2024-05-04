import baseApi from "../../baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add payment info
    addPayment: builder.mutation({
      query: (data) => ({
        url: "/payments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["payments"],
    }),

    // get all payments
    getAllPayments: builder.query({
      query: () => "/payments",
      providesTags: ["payments"],
    }),

    getTotalOrderPrice: builder.query({
      query: () => "/payments/totalOrderPrice",
      providesTags: ["payments"],
    }),

    // delete a payment
    deletePayment: builder.mutation({
      query: (id) => ({ url: `/payments/${id}`, method: "DELETE" }),

      invalidatesTags: ["payments"],
    }),
  }),
});

export const {
  useAddPaymentMutation,
  useGetAllPaymentsQuery,
  useDeletePaymentMutation,
  useGetTotalOrderPriceQuery,
} = paymentApi;
