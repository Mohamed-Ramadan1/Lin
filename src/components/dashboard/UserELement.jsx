import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";
import ActionButton from "./shard/ActionButton";
import {
  handelOperationRequest,
  deleteOperationRequests,
} from "./shard/dashboardOperations";
const UserELement = ({ user, setIsChanged }) => {
  const { name, email, role, createdAt, updatedAt, _id, isVerified, active } =
    user;
  const verified = isVerified ? "Verified" : "Not verified";

  const activation = active ? "Active" : "Not active";
  const formatData = new Date(createdAt).toLocaleDateString("en-GB");
  const formatUpdateData = new Date(updatedAt).toLocaleDateString("en-GB");

  return (
    <TableBody>
      <TableBodyCell>{_id}</TableBodyCell>
      <TableBodyCell>{name}</TableBodyCell>
      <TableBodyCell>{email}</TableBodyCell>
      <TableBodyCell>{verified}</TableBodyCell>
      <TableBodyCell>{role}</TableBodyCell>
      <TableBodyCell>{formatData}</TableBodyCell>
      <TableBodyCell>{formatUpdateData}</TableBodyCell>
      <TableBodyCell>{activation}</TableBodyCell>
      <TableBodyCell>
        <div className="flex gap-5">
          <ActionButton
            onClick={() => {
              deleteOperationRequests(
                "Are you sure you want to delete?",
                `/users/${_id}`,
                "User deleted successfully",
                "Error deleting user",
                setIsChanged
              );
            }}
            text="Delete"
            action={"danger"}
            disabled={false}
          />

          <ActionButton
            onClick={() => {
              handelOperationRequest(
                "Are you sure you want to unActivate?",
                `/users/${_id}/inactive`,
                "User unActivated successfully",
                "Error unActivated user",
                setIsChanged
              );
            }}
            text="Un-Active"
            action={"mainBlue"}
            disabled={!active}
          />
          <ActionButton
            onClick={() => {
              handelOperationRequest(
                "Are you sure you want to activate?",
                `/users/${_id}/active`,
                "User activated successfully",
                "Error activating user",
                setIsChanged
              );
            }}
            text="Active"
            action={"mainGreen"}
            disabled={active}
          />

          <ActionButton
            onClick={() => {
              handelOperationRequest(
                "Are you sure you want to verify?",
                `/users/${_id}/verify`,
                "User email verified successfully",
                "Error verified email ",
                setIsChanged
              );
            }}
            text="Verify"
            action={"mainGreen"}
            disabled={isVerified}
          />
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default UserELement;
