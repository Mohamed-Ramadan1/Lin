import TableHeader from "./shard/TableHeader";
import TableHeaderCell from "./shard/TableHeaderCell";
const EnrollmentHeader = () => {
  return (
    <TableHeader>
      <TableHeaderCell>Index</TableHeaderCell>
      <TableHeaderCell>Course Title</TableHeaderCell>
      <TableHeaderCell>User Name</TableHeaderCell>
      <TableHeaderCell>User Email</TableHeaderCell>
      <TableHeaderCell>Paid Status</TableHeaderCell>
      <TableHeaderCell>crated At</TableHeaderCell>
      <TableHeaderCell>Duration</TableHeaderCell>
      <TableHeaderCell>Price</TableHeaderCell>
      <TableHeaderCell>Updated At</TableHeaderCell>
      <TableHeaderCell>Enrollment Status</TableHeaderCell>
      <TableHeaderCell>Options</TableHeaderCell>
    </TableHeader>
  );
};

export default EnrollmentHeader;
