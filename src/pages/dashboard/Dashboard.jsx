import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { customFetch } from "../../utils/customFetch";
import { PageIntro, StatsBox, StatsContainer } from "../../components";
import { LoadingSpinner } from "../../components";
import SyncLoader from "react-spinners/SyncLoader";

import useFetchData from "../../hooks/useFetchData";
function Dashboard() {
  const { token } = useSelector((state) => state.userReducers);

  const { data, loading, error, fetchData } = useFetchData(
    "admin/siteStatics",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },

      requestedData: "statics",
    }
  );

  useEffect(() => {
    fetchData();
  }, [token]);
  console.log(data);
  return (
    <>
      <div className="p-5">
        <PageIntro pageName="Stats" />

        {loading && !error && <LoadingSpinner />}

        {!loading && error && <p>Error: {error.message}</p>}

        {data && !loading && (
          <StatsContainer>
            <StatsBox statsText="Total Users" statsValue={data && data.users} />
            <StatsBox
              statsText="Total Instructors"
              statsValue={data && data.instructors}
            />
            <StatsBox
              statsText="Total Enrollments"
              statsValue={data && data.enrollments}
            />
            <StatsBox
              statsText="Total Courses"
              statsValue={data && data.courses}
            />
            <StatsBox
              statsText="Free Courses"
              statsValue={data && data.freeCourses}
            />
            <StatsBox
              statsText="Paid Courses"
              statsValue={data && data.paidCourses}
            />
            <StatsBox
              statsText="Admins accounts"
              statsValue={data && data.admins}
            />
            <StatsBox
              statsText="Students Accounts"
              statsValue={data && data.students}
            />
            <StatsBox
              statsText="Verified Accounts"
              statsValue={data && data.verifiedAccounts}
            />

            <StatsBox
              statsText="Un Verified Accounts"
              statsValue={data && data.unverifiedAccounts}
            />

            <StatsBox
              statsText="Active Accounts"
              statsValue={data && data.activeAccounts}
            />

            <StatsBox
              statsText="Un Active Accounts"
              statsValue={data && data.inactiveAccounts}
            />

            <StatsBox
              statsText="Total financial aid requests"
              statsValue={data.financialAidRequests}
            />
            <StatsBox statsText="Main Languages" statsValue={3} />
          </StatsContainer>
        )}
      </div>
    </>
  );
}

export default Dashboard;
