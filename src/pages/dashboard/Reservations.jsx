import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllEnrollments } from "../../store/courseEnrollmentsSlice";
import {
  PageIntro,
  PageContainer,
  EnrollmentElement,
  EnrollmentHeader,
} from "../../components";
function Reservations() {
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();
  const { allEnrollments } = useSelector(
    (state) => state.courseEnrollmenReducers
  );
  const { token } = useSelector((state) => state.userReducers);

  useEffect(() => {
    setIsChanged(false);
    dispatch(getAllEnrollments());
  }, [dispatch, isChanged]);

  console.log(allEnrollments);
  return (
    <div className="p-5">
      <PageIntro pageName="Reservations" />

      <PageContainer tableHeader="Courses Enrollments">
        <EnrollmentHeader />

        {allEnrollments &&
          allEnrollments.map((enrollment, index) => (
            <EnrollmentElement
              key={enrollment._id}
              enrollment={enrollment}
              index={index + 1}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}

        {allEnrollments.length === 0 && (
          <tr>
            <td colSpan="9" className="text-center p-5">
              No enrollments found
            </td>
          </tr>
        )}
      </PageContainer>
    </div>
  );
}

export default Reservations;
