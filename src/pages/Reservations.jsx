import EnrollmentContainer from "./../layout/dashboard/EnrollmentsContainer";
import EnrollmentElement from "./../layout/dashboard/EnrollmentElement";
import EnrollmentHeader from "./../layout/dashboard/EnrollmentHeader";
import { getAllEnrollments } from "../store/courseEnrollmentsSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function Reservations() {
  const dispatch = useDispatch();
  const { allEnrollments } = useSelector(
    (state) => state.courseEnrollmenReducers
  );
  const { token } = useSelector((state) => state.userReducers);

  useEffect(() => {
    dispatch(getAllEnrollments());
  }, [dispatch]);

  return (
    <>
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
    </>
  );
}

export default Reservations;
