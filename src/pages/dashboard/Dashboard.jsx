import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { customFetch } from "../../utils/customFetch";
import { PageIntro, StatsBox, StatsContainer } from "../../components";

function Dashboard() {
  const { token } = useSelector((state) => state.userReducers);
  const [siteStates, setSiteStates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await customFetch.get("/admin/siteStatics", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setSiteStates(res.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, [token]);
  console.log(loading);
  return (
    <>
      <div className="p-5">
        <PageIntro pageName="Stats" />

        {loading && (
          <div>
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
          </div>
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
