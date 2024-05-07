import PageContainer from "../layout/dashboard/PageContainer";
import InstructorRequestsHeader from "../layout/dashboard/InstructorRequestsHeader";
const ManageInstructorsRequests = () => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">
          Dashboard /<span className="text-blue-600">Instructor Requests </span>
        </h1>

        <PageContainer tableHeader={"Instructors requests"}>
          <InstructorRequestsHeader />
        </PageContainer>
      </div>
    </>
  );
};

export default ManageInstructorsRequests;
