import TableHeader from "./shard/TableHeader";
import TableHeaderCell from "./shard/TableHeaderCell";
const InstructorRequestsHeader = () => {
  return (
    <TableHeader>
      <TableHeaderCell>Request-ID</TableHeaderCell>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell>Phone Number</TableHeaderCell>
      <TableHeaderCell>Experience Years</TableHeaderCell>
      <TableHeaderCell>Specialization</TableHeaderCell>
      <TableHeaderCell>Application Stats</TableHeaderCell>
      <TableHeaderCell>Application Created At</TableHeaderCell>
      <TableHeaderCell>Actions</TableHeaderCell>
    </TableHeader>
  );
};

export default InstructorRequestsHeader;
