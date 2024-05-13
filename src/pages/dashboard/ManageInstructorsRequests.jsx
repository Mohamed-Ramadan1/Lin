import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  InstructorRequestsHeader,
  InstructorsApplicationElement,
} from "../../components";

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
      <PageIntro pageName="Instructors Requests" />

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
