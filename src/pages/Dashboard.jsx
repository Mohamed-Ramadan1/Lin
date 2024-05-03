import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import StatsContainer from "../layout/dashboard/StatsContainer";
import StatsBox from "../layout/dashboard/StatsBox";

function Dashboard() {
  const { token } = useSelector((state) => state.userReducers);
  const [siteStates, setSiteStates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://graduation-project-backend-5vtx.onrender.com/api/v1/admin/siteStatics",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSiteStates(res.data.data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
    setLoading(false);
  }, [token]);

  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">
          Dashboard / <span className="text-blue-600">statics </span>{" "}
        </h1>

        {loading && (
          <>
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
          </>
        )}
        {!loading && error && <p>Error: {error.message}</p>}

        {siteStates && (
          <StatsContainer>
            <StatsBox
              statsText="Total Users"
              statsValue={siteStates && siteStates.users}
            />
            <StatsBox
              statsText="Total Instructors"
              statsValue={siteStates && siteStates.instructors}
            />
            <StatsBox
              statsText="Total Enrollments"
              statsValue={siteStates && siteStates.enrollments}
            />
            <StatsBox
              statsText="Total Courses"
              statsValue={siteStates && siteStates.courses}
            />
            <StatsBox
              statsText="Free Courses"
              statsValue={siteStates && siteStates.freeCourses}
            />
            <StatsBox
              statsText="Paid Courses"
              statsValue={siteStates && siteStates.paidCourses}
            />
            <StatsBox
              statsText="Admins accounts"
              statsValue={siteStates && siteStates.admins}
            />
            <StatsBox
              statsText="Students Accounts"
              statsValue={siteStates && siteStates.students}
            />
            <StatsBox
              statsText="Verified Accounts"
              statsValue={siteStates && siteStates.verifiedAccounts}
            />

            <StatsBox
              statsText="Un Verified Accounts"
              statsValue={siteStates && siteStates.unverifiedAccounts}
            />

            <StatsBox
              statsText="Active Accounts"
              statsValue={siteStates && siteStates.activeAccounts}
            />

            <StatsBox
              statsText="Un Active Accounts"
              statsValue={siteStates && siteStates.inactiveAccounts}
            />

            <StatsBox statsText="Total Categories" statsValue={5} />
            <StatsBox statsText="Main Languages" statsValue={3} />
          </StatsContainer>
        )}
      </div>
    </>
  );
}

export default Dashboard;
