import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";
import ActionButton from "./shard/ActionButton";
import {
  handelOperationRequest,
  deleteOperationRequests,
} from "./shard/dashboardOperations";
const InstructorElement = ({ instructor, setIsChanged }) => {
  const {
    _id,
    specialization,
    name,
    email,
    rating,
    experience,
    createdAt,
    status,
  } = instructor;

  const formatData = new Date(createdAt).toLocaleDateString();

  return (
    <TableBody>
      <TableBodyCell>{_id}</TableBodyCell>
      <TableBodyCell>{name}</TableBodyCell>
      <TableBodyCell>{email}</TableBodyCell>
      <TableBodyCell>{specialization}</TableBodyCell>
      <TableBodyCell>{rating}</TableBodyCell>
      <TableBodyCell>{formatData}</TableBodyCell>
      <TableBodyCell>{experience || 0} </TableBodyCell>
      <TableBodyCell>{status}</TableBodyCell>
      <TableBodyCell>
        <div className="flex gap-5">
          <ActionButton
            onClick={() => {
              deleteOperationRequests(
                "Are you sure you want to delete?",
                `/instructors/${_id}`,
                "Instructor deleted successfully",
                "Error deleting instructor",
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
                "Are you sure you want to un-activate this instructor?",
                `/instructors/${_id}/inactive`,
                "Instructor un-activated successfully",
                "Error unactivating instructor",
                setIsChanged
              );
            }}
            text="UnActive"
            action={"mainBlue"}
            disabled={status === "inactive"}
          />

          <ActionButton
            onClick={() => {
              handelOperationRequest(
                "Are you sure you want to activate this instructor?",
                `/instructors/${_id}/active`,
                "Instructor activated successfully",
                "Error activating instructor",
                setIsChanged
              );
            }}
            text="Active"
            action={"mainGreen"}
            disabled={status === "active"}
          />
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default InstructorElement;
