import TableHeader from "./shard/TableHeader";
import TableHeaderCell from "./shard/TableHeaderCell";
const UserTableHeader = () => {
  return (
    <TableHeader>
      <TableHeaderCell>Index</TableHeaderCell>
      <TableHeaderCell>User-ID</TableHeaderCell>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell>Email-Verified</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
      <TableHeaderCell>Created at</TableHeaderCell>
      <TableHeaderCell>Email-Status</TableHeaderCell>
      <TableHeaderCell>Options</TableHeaderCell>
    </TableHeader>
  );
};

export default UserTableHeader;
