import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../utils/customFetch";

import PageContainer from "../layout/dashboard/PageContainer";
import InstructorRequestsHeader from "../layout/dashboard/InstructorRequestsHeader";
import InstructorsApplicationElement from "../layout/dashboard/InstructorsApplicationElement";

const ManageInstructorsRequests = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [instructors, setInstructors] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(false);
    const fetchInstructors = async () => {
      try {
        const response = await customFetch.get("instructorApplications", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setInstructors(response.data.data.applications);
      } catch (error) {
        setError(error.response.data.message);
      }
    };
    fetchInstructors();
  }, [token, isChanged]);

  return (
    <div className="p-5 ">
      <h1 className="text-2xl font-semibold">
        Dashboard /<span className="text-blue-600">Instructor Requests </span>
      </h1>

      <PageContainer tableHeader={"Instructors requests"}>
        <InstructorRequestsHeader />
        {instructors &&
          instructors.map((instructor, index) => (
            <InstructorsApplicationElement
              key={instructor._id}
              instructor={instructor}
              index={index + 1}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}
      </PageContainer>
    </div>
  );
};

export default ManageInstructorsRequests;
