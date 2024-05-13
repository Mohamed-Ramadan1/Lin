import TableHeader from "./shard/TableHeader";
import TableHeaderCell from "./shard/TableHeaderCell";
const CoursesHeader = () => {
  return (
    <TableHeader>
      <TableHeaderCell>#num</TableHeaderCell>
      <TableHeaderCell>Title</TableHeaderCell>
      <TableHeaderCell>created Date</TableHeaderCell>
      <TableHeaderCell>Last Update</TableHeaderCell>
      <TableHeaderCell>total Reviews</TableHeaderCell>
      <TableHeaderCell>average Rating</TableHeaderCell>
      <TableHeaderCell>price</TableHeaderCell>
      <TableHeaderCell>category</TableHeaderCell>
      <TableHeaderCell>duration</TableHeaderCell>
      <TableHeaderCell>payment Model</TableHeaderCell>
      <TableHeaderCell>language</TableHeaderCell>
      <TableHeaderCell>Actions</TableHeaderCell>
    </TableHeader>
  );
};

export default CoursesHeader;
