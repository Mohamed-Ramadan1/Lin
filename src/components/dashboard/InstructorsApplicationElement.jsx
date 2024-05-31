import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";
import ActionButton from "./shard/ActionButton";
import {
  handelOperationRequest,
  deleteOperationRequests,
} from "./shard/dashboardOperations";

const InstructorsApplicationElement = ({
  instructor,

  setIsChanged,
}) => {
  const {
    _id,
    name,
    email,
    phone,
    experience,
    specialization,
    status,
    createdAt,
  } = instructor;
  const createdAtDate = new Date(createdAt).toLocaleDateString();

  return (
    <TableBody>
      <TableBodyCell>{name}</TableBodyCell>
      <TableBodyCell>{email}</TableBodyCell>
      <TableBodyCell>{phone}</TableBodyCell>
      <TableBodyCell>{experience}</TableBodyCell>
      <TableBodyCell>{specialization}</TableBodyCell>
      <TableBodyCell>{status}</TableBodyCell>
      <TableBodyCell>{createdAtDate}</TableBodyCell>

      <TableBodyCell>
        <div className="flex gap-5">
          <ActionButton
            onClick={() => {
              deleteOperationRequests(
                "Are you sure you want to delete?",
                `instructorApplications/${_id}`,
                "Instructor application deleted successfully",
                "Error deleting instructor application",
                setIsChanged
              );
            }}
            text="Delete"
            action={"danger"}
            disabled={false}
          />

          <ActionButton
            onClick={() =>
              handelOperationRequest(
                "Are you sure you want to reject?",
                `instructorApplications/${_id}/reject`,
                "Instructor application rejected successfully",
                "Error rejecting instructor application",
                setIsChanged
              )
            }
            text="Reject"
            action={"mainBlue"}
            disabled={status === "rejected"}
          />

          <ActionButton
            onClick={() =>
              handelOperationRequest(
                "Are you sure you want to approve?",
                `instructorApplications/${_id}/approve`,
                "Instructor application approved successfully",
                "Error approving instructor application",
                setIsChanged
              )
            }
            text="Approve"
            action={"mainGreen"}
            disabled={status === "approved"}
          />
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default InstructorsApplicationElement;
