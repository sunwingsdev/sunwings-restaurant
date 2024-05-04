import moment from "moment";

const ViewPaymentDetails = ({ row }) => {
  const {
    name,
    email,
    phone,
    createdAt,
    itemIds,
    orderPrice,
    paid,
    paymentMethod,
    paymentNumber,
  } = row;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6 m-4">
      <div className="font-bold text-xl mb-4">Payment Details</div>
      <div className="text-gray-700">
        <p className="mb-2">
          <span className="font-bold">Name:</span> {name}
        </p>
        <p className="mb-2">
          <span className="font-bold">Email:</span> {email}
        </p>
        <p className="mb-2">
          <span className="font-bold">Phone:</span> {phone}
        </p>
        <p className="mb-2">
          <span className="font-bold">Created At:</span>{" "}
          {moment(createdAt).format("MMMM Do YYYY, h:mm a")}
        </p>
        <p className="mb-2">
          <span className="font-bold">Items:</span>{" "}
          {itemIds.map(({ name, quantity }) => (
            <div key={name}>
              <p>{name}</p>
              <p>{quantity}</p>
            </div>
          ))}
        </p>

        <p className="mb-2">
          <span className="font-bold">Payment Method:</span> {paymentMethod}
        </p>
        <p className="mb-2">
          <span className="font-bold">Order Price:</span> {orderPrice} Tk
        </p>
        {paid && (
          <p className="mb-2">
            <span className="font-bold">Paid:</span> {paid} Tk
          </p>
        )}
        {paymentNumber && (
          <p className="mb-2">
            <span className="font-bold">Payment Number:</span> {paymentNumber}
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewPaymentDetails;
