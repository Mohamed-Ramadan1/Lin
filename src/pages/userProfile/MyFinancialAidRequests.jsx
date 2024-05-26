import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";
import { Link } from "react-router-dom";
import {
  Pagination,
  FinancialAidCard,
  EmptyItems,
  ErrorMessage,
  LoadingSpinner,
  ProfilePageContainer,
} from "../../components";

const MyFinancialAidRequests = () => {
  const [financialAidRequests, setFinancialAidRequests] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.userReducers);

  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsChanged(false);
    const fetchWishlistItems = async () => {
      try {
        setLoading(true);
        const response = await customFetch.get("financialAidRequests", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
            sort: "-createdAt",
          },
        });
        if (response.data.data.financialAidRequests) {
          setFinancialAidRequests(response.data.data.financialAidRequests);
          setIsMorePages(
            response.data.data.financialAidRequests.length === itemsPerPage
          );
        } else {
          setFinancialAidRequests([]);
          setIsMorePages(false);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchWishlistItems();
    setLoading(false);
  }, [token, itemsPerPage, currentPage, isChanged]);
  return (
    <>
      <ProfilePageContainer>
        {financialAidRequests.length > 0 && (
          <div className="grid w-full sm:grid-cols-3  sm:gap-4 md:grid-cols-3  ">
            {financialAidRequests &&
              financialAidRequests.map((request) => (
                <FinancialAidCard
                  request={request}
                  key={request._id}
                  setIsChanged={setIsChanged}
                />
              ))}
          </div>
        )}
        {financialAidRequests.length === 0 && (
          <EmptyItems
            headerText={"  No Application Requested Yet"}
            linkText={" Start Navigate to Courses"}
            toUrl="/courses"
          />
        )}
        {loading && !error && <LoadingSpinner />}

        {error && <ErrorMessage errorMessage={error} />}
      </ProfilePageContainer>
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-end w-[50%]">
          <Pagination
            currentPage={currentPage}
            isMorePages={isMorePages}
            onPrevPage={() => setCurrentPage((prev) => prev - 1)}
            onNextPage={() => setCurrentPage((prev) => prev + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default MyFinancialAidRequests;
