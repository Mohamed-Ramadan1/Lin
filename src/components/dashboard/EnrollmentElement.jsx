import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";
import ActionButton from "./shard/ActionButton";
import {
  handelOperationRequest,
  deleteOperationRequests,
} from "./shard/dashboardOperations";
const EnrollmentElement = ({ enrollment, setIsChanged }) => {
  const {
    _id,
    price,
    createdAt,
    paid,
    updatedAt,
    enrollmentStatus,
    financialAid,
  } = enrollment;
  const { title, duration } = enrollment.course;
  const { name, email } = enrollment.user;

  const isPaid = paid ? "Paid" : "Not Paid";
  const isFinancialAid = financialAid ? "Yes" : "No";
  const createdAtDate = new Date(createdAt).toLocaleDateString();
  const updatedAtDate = new Date(updatedAt).toLocaleDateString();

  return (
    <TableBody>
      <TableBodyCell>{title}</TableBodyCell>
      <TableBodyCell>{name}</TableBodyCell>
      <TableBodyCell>{email}</TableBodyCell>
      <TableBodyCell>{isPaid}</TableBodyCell>
      <TableBodyCell>{createdAtDate}</TableBodyCell>
      <TableBodyCell>{duration} h</TableBodyCell>
      <TableBodyCell>{price || 0} $</TableBodyCell>
      <TableBodyCell>{isFinancialAid}</TableBodyCell>
      <TableBodyCell>{updatedAtDate}</TableBodyCell>
      <TableBodyCell>{enrollmentStatus}</TableBodyCell>

      <TableBodyCell>
        <div className="flex gap-5 text-center">
          <ActionButton
            onClick={() => {
              deleteOperationRequests(
                "Are you sure you want to delete?",
                `enrolls/${_id}`,
                "Enrollment deleted successfully",
                "Error deleting enrollment",
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
                "Are you sure you want to cancel?",
                `admin/cancelEnrollment/${_id}`,
                "Enrollment cancelled successfully",
                "Error cancelling enrollment",
                setIsChanged
              );
            }}
            text="Cancel"
            action={"mainBlue"}
            disabled={enrollmentStatus === "cancelled"}
          />

          <ActionButton
            onClick={() => {
              handelOperationRequest(
                "Are you sure you want to approve?",
                `admin/approveEnrollment/${_id}`,
                "Enrollment approved successfully",
                "Error approving enrollment",
                setIsChanged
              );
            }}
            text="Approve"
            action={"mainGreen"}
            disabled={enrollmentStatus === "approved"}
          />
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default EnrollmentElement;
