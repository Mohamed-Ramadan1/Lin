import TableHeader from "./shard/TableHeader";
import TableHeaderCell from "./shard/TableHeaderCell";

const BlogsTableHeader = () => {
  return (
    <TableHeader>
      <TableHeaderCell>Blog-ID</TableHeaderCell>
      <TableHeaderCell>Title</TableHeaderCell>
      <TableHeaderCell>Category</TableHeaderCell>
      <TableHeaderCell>Arthur Name </TableHeaderCell>
      <TableHeaderCell>Arthur Email</TableHeaderCell>
      <TableHeaderCell>Published</TableHeaderCell>
      <TableHeaderCell>Actions</TableHeaderCell>
    </TableHeader>
  );
};

export default BlogsTableHeader;
