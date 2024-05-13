import TableHeader from "./shard/TableHeader";
import TableHeaderCell from "./shard/TableHeaderCell";
const PaymentsTableHeader = () => {
  return (
    <TableHeader>
      <TableHeaderCell>#num</TableHeaderCell>
      <TableHeaderCell>User Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell>payment Verified</TableHeaderCell>
      <TableHeaderCell>payment Amount</TableHeaderCell>
      <TableHeaderCell>payment Status</TableHeaderCell>
      <TableHeaderCell>Payment Date</TableHeaderCell>
      <TableHeaderCell>Card Number</TableHeaderCell>
    </TableHeader>
  );
};

export default PaymentsTableHeader;
