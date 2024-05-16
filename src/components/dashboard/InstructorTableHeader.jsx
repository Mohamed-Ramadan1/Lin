import TableHeader from "./shard/TableHeader";
import TableHeaderCell from "./shard/TableHeaderCell";
const InstructorTableHeader = () => {
  return (
    <TableHeader>
      <TableHeaderCell>Instructor-ID</TableHeaderCell>
      <TableHeaderCell>Instructor Name</TableHeaderCell>
      <TableHeaderCell>Instructor Email</TableHeaderCell>
      <TableHeaderCell>Instructor Specialization</TableHeaderCell>
      <TableHeaderCell>Rating</TableHeaderCell>
      <TableHeaderCell>Joining At</TableHeaderCell>
      <TableHeaderCell>Experiences Years</TableHeaderCell>
      <TableHeaderCell>Status</TableHeaderCell>
      <TableHeaderCell>Options</TableHeaderCell>
    </TableHeader>
  );
};

export default InstructorTableHeader;
