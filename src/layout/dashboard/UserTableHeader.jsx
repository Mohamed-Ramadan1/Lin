const UserTableHeader = () => {
  return (
    <thead>
      <tr className="border-b">
        <td className="p-3 text-center">Index</td>
        <td className="p-3 text-center">User-ID</td>
        <td className="p-3 text-center">Name</td>
        <td className="p-3 text-center">Email</td>
        <td className="p-3 text-center">Email-Verified</td>
        <td className="p-3 text-center">Role</td>
        <td className="p-3 text-center">Created at</td>
        <td className="p-3 text-center">Email-Status</td>
        <td className="p-3 text-center">Options</td>
      </tr>
    </thead>
  );
};

export default UserTableHeader;
