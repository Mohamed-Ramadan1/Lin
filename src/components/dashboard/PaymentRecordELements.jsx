import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";

const PaymentRecordELements = ({ payment }) => {
  const {
    _id,
    name,
    email,
    paymentVerified,
    paymentAmount,
    paymentStatus,
    createdAt,
    cardNumber,
  } = payment;
  const paymentDate = new Date(createdAt).toLocaleDateString();
  const isPaymentVerified = paymentVerified ? "Yes" : "No";
  return (
    <TableBody>
      <TableBodyCell>{_id}</TableBodyCell>
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
