import TableHeader from "./shard/TableHeader";
import TableHeaderCell from "./shard/TableHeaderCell";

const FinancialAidRequestHeader = () => {
  return (
    <TableHeader>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell>Age</TableHeaderCell>
      <TableHeaderCell>Education</TableHeaderCell>
      <TableHeaderCell>Employment-Status</TableHeaderCell>
      <TableHeaderCell>Course-Title</TableHeaderCell>
      <TableHeaderCell>Created At</TableHeaderCell>
      <TableHeaderCell>Application-Status</TableHeaderCell>
      <TableHeaderCell>Actions</TableHeaderCell>
    </TableHeader>
  );
};

export default FinancialAidRequestHeader;
