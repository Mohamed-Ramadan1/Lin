import UsersContainer from "../layout/dashboard/UserContainer";
import InstructoreTableHeader from "../layout/dashboard/InstructoreTableHeader";
import InstructorElement from "../layout/dashboard/InstructorElement";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../utils/customFetch";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useSelector((state) => state.userReducers);

  useEffect(() => {
    setIsChanged(false);
    const fetchInstructors = async () => {
      try {
        const res = await customFetch.get("admin/getAllInstructors", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInstructors(res.data.data.instructors);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };
    fetchInstructors();
  }, [token, isChanged]);

  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">
          Dashboard / <span className="text-blue-600">Instructors </span>
        </h1>
        <UsersContainer tableHeader="Instructors">
          <InstructoreTableHeader />
          {loading ? (
            <p className="text-center font-bold text-3xl">Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            instructors.map((instructor, index) => (
              <InstructorElement
                key={instructor._id}
                index={index + 1}
                instructor={instructor}
                token={token}
                setIsChanged={setIsChanged}
              />
            ))
          )}

          {!loading && instructors.length === 0 && (
            <p className="text-center font-bold text-3xl">
              No Instructors Found
            </p>
          )}
        </UsersContainer>
      </div>
    </>
  );
};

export default Instructors;
