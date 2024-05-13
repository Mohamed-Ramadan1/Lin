import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";

const PaymentRecordELements = ({ payment, index }) => {
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
    <TableBody>
      <TableBodyCell>{index}</TableBodyCell>
      <TableBodyCell>{name}</TableBodyCell>
      <TableBodyCell>{email}</TableBodyCell>
      <TableBodyCell>{isPaymentVerified}</TableBodyCell>
      <TableBodyCell>{paymentAmount} $</TableBodyCell>
      <TableBodyCell>{paymentStatus}</TableBodyCell>
      <TableBodyCell>{paymentDate}</TableBodyCell>
      <TableBodyCell>{cardNumber}</TableBodyCell>
    </TableBody>
  );
};

export default PaymentRecordELements;
