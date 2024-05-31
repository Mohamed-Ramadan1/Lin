import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";
import ActionButton from "./shard/ActionButton";
import {
  handelOperationRequest,
  deleteOperationRequests,
} from "./shard/dashboardOperations";

const FinancialAidRequestElement = ({ request, token, setIsChanged }) => {
  const {
    _id,
    age,
    education,
    employmentStatus,
    course,
    user,
    applicationStatus,
    createdAt,
    updatedAt,
  } = request;
  const formatCreatedAtDate = new Date(createdAt).toLocaleDateString();

  return (
    <TableBody>
      <TableBodyCell>{user.name}</TableBodyCell>
      <TableBodyCell>{user.email}</TableBodyCell>
      <TableBodyCell>{age}</TableBodyCell>
      <TableBodyCell>{education}</TableBodyCell>
      <TableBodyCell>{employmentStatus}</TableBodyCell>
      <TableBodyCell>{course.title}</TableBodyCell>
      <TableBodyCell>{formatCreatedAtDate}</TableBodyCell>
      <TableBodyCell>{applicationStatus}</TableBodyCell>

      <TableBodyCell>
        <div className="flex gap-5">
          <ActionButton
            onClick={() => {
              deleteOperationRequests(
                "Are you sure you want to delete?",
                `admin/deleteFinancialAidRequest/${_id}`,
                "Financial Aid request deleted successfully",
                "Error deleting financial aid request",
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
                "Are you sure you want to reject this financial aid request?",
                `admin/rejectFinancialAidRequest/${_id}`,
                "Financial Aid application rejected successfully",
                "Error rejecting financial aid request",
                setIsChanged
              );
            }}
            text="Reject"
            action={"mainBlue"}
            disabled={applicationStatus === "rejected"}
          />

          <ActionButton
            onClick={() => {
              handelOperationRequest(
                "Are you sure you want to approve this financial aid request?",
                `admin/approveFinancialAidRequest/${_id}`,
                "Financial application approved successfully",
                "Error approving financial aid request",
                setIsChanged
              );
            }}
            text="Approve"
            action={"mainGreen"}
            disabled={applicationStatus === "approved"}
          />
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default FinancialAidRequestElement;
