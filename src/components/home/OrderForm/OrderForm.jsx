import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { useAddPaymentMutation } from "../../../redux/features/allApis/paymentApi/paymentApi";
import { useState } from "react";

const OrderForm = ({ closeModal, orders, totalOrderPrice }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addPayment] = useAddPaymentMutation();
  const [loading, setLoading] = useState(false);
  const [paidValue, setPaidValue] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const { addToast } = useToasts();

  const onSubmit = async (data) => {
    // You can handle form submission logic here, like sending data to the server
    let itemIds = [];
    if (orders.length !== 0) {
      orders.map((item) => itemIds.push(item._id));
      data.itemIds = itemIds;
    }
    if (data.paid < totalOrderPrice) {
      addToast("Paid amount is less than total order amount", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      try {
        setLoading(true);
        const result = await addPayment(data);
        if (result.data.insertedId) {
          addToast("Payment successful", {
            appearance: "success",
            autoDismiss: true,
          });
          setLoading(false);
          closeModal();
        }
      } catch (error) {
        addToast(error.message, {
          appearance: "error",
          autoDismiss: true,
        });
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <p className="text-center">
          Total payable: {Math.ceil(totalOrderPrice)}
        </p>
        <div>
          <label className="text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            className="input input-bordered w-full mt-1"
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>
        <div>
          <label className="text-gray-700" htmlFor="phone">
            Phone
          </label>
          <input
            {...register("phone", { required: true })}
            type="text"
            id="phone"
            className="input input-bordered w-full mt-1"
          />
          {errors.phone && (
            <span className="text-red-500">Phone is required</span>
          )}
        </div>
        <div>
          <label className="text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="input input-bordered w-full mt-1"
          />
          {errors.email && (
            <span className="text-red-500">Valid email is required</span>
          )}
        </div>
        <div>
          <label className="text-gray-700" htmlFor="paymentMethod">
            Payment Method
          </label>
          <select
            {...register("paymentMethod", { required: true })}
            id="paymentMethod"
            className="input input-bordered w-full mt-1"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="" selected disabled>
              Select Payment Method
            </option>
            <option value="cash">Cash</option>
            <option value="bkash">bKash</option>
            <option value="nagad">Nagad</option>
            <option value="rocket">Rocket</option>
          </select>
          {errors.paymentMethod && (
            <span className="text-red-500">Payment Method is required</span>
          )}
        </div>
        {paymentMethod !== "cash" && (
          <div>
            <label className="text-gray-700" htmlFor="phone">
              Payment Number
            </label>
            <input
              {...register("paymentNumber", { required: true })}
              type="text"
              id="paymentNumber"
              className="input input-bordered w-full mt-1"
            />
            {errors.paymentNumber && (
              <span className="text-red-500">Payment number is required</span>
            )}
          </div>
        )}
        <div>
          <label className="text-gray-700" htmlFor="price">
            Order Price
          </label>
          <input
            {...register("orderPrice", {
              required: true,
              pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
            })}
            type="text"
            id="orderPrice"
            readOnly
            value={Math.ceil(totalOrderPrice)}
            className="input input-bordered w-full mt-1"
          />
        </div>
        {paymentMethod === "cash" && (
          <div>
            <label className="text-gray-700" htmlFor="price">
              Paid
            </label>
            <input
              {...register("paid", {
                required: true,
                pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
              })}
              onChange={(e) => setPaidValue(parseFloat(e.target.value))}
              type="text"
              id="paid"
              className="input input-bordered w-full mt-1"
            />
            {errors.paid && (
              <span className="text-red-500">Valid price is required</span>
            )}
          </div>
        )}
        {paymentMethod === "cash" && (
          <div>
            <label className="text-gray-700" htmlFor="price">
              Return
            </label>
            <input
              {...register("return", {
                required: true,
                pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
              })}
              type="text"
              id="return"
              readOnly
              value={paidValue - Math.ceil(totalOrderPrice)}
              className="input input-bordered w-full mt-1"
            />
          </div>
        )}
        <div className="flex justify-between items-center gap-2">
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-secondary w-1/2"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary w-1/2">
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
