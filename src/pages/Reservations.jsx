import EnrollmentContainer from "./../layout/dashboard/EnrollmentsContainer";
import EnrollmentElement from "./../layout/dashboard/EnrollmentElement";
import EnrollmentHeader from "./../layout/dashboard/EnrollmentHeader";
import { getAllEnrollments } from "../store/courseEnrollmentsSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
      <h1 className="text-2xl font-semibold">
        Dashboard / <span className="text-blue-600">Enrollments</span>
      </h1>

      <EnrollmentContainer>
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
      </EnrollmentContainer>
    </div>
  );
}

export default Reservations;
