const PaymentRecordELements = ({ payment, token, index }) => {
  const {
    _id,
    firstName,
    lastName,
    email,
    paymentVerified,
    paymentAmount,
    paymentStatus,
    createdAt,
    cardNumber,
  } = payment;
  const name = `${firstName} ${lastName}`;
  const paymentDate = new Date(createdAt).toLocaleDateString();
  const isPaymentVerified = paymentVerified ? "Yes" : "No";
  return (
    <tbody>
      <tr>
        <td className="p-3 text-center">{index}</td>
        <td className="p-3 text-center">{name}</td>
        <td className="p-3 text-center">{email}</td>
        <td className="p-3 text-center">{isPaymentVerified}</td>
        <td className="p-3 text-center">{paymentAmount} $</td>
        <td className="p-3 text-center">{paymentStatus}</td>
        <td className="p-3 text-center">{paymentDate}</td>
        <td className="p-3 text-center">{cardNumber}</td>
      </tr>
    </tbody>
  );
};

export default PaymentRecordELements;
