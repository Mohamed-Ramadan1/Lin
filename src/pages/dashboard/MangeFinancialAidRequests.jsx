import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  PageIntro,
  PageContainer,
  FinancialAidRequestHeader,
  FinancialAidRequestElement,
  Pagination,
  LoadingWhile,
  Error,
  NotFoundData,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

const MangeFinancialAidRequests = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanged, setIsChanged] = useState(false);
  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "/financialAidRequests/allRequests",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: currentPage,
        limit: itemsPerPage,
        sort: "-createdAt",
      },
      requestedData: "financialAidRequests",
    }
  );
  useEffect(() => {
    setIsChanged(false);
    fetchData();
  }, [token, isChanged, currentPage, itemsPerPage]);

  return (
    <div className="p-5">
      <PageIntro pageName="Financial Aids requests" />
      <PageContainer tableHeader="Financial Aids requests">
        <FinancialAidRequestHeader />
        {loading && <LoadingWhile />}

        {!loading &&
          !error &&
          data &&
          data.map((request) => (
            <FinancialAidRequestElement
              key={request._id}
              request={request}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}

        {!loading && data.length === 0 && (
          <NotFoundData message={"No Financial aid requests  Found "} />
        )}
        {error && !loading && <Error errorMessage={error} />}
      </PageContainer>
      <Pagination
        currentPage={currentPage}
        isMorePages={isMorePages}
        onPrevPage={() => setCurrentPage((prev) => prev - 1)}
        onNextPage={() => setCurrentPage((prev) => prev + 1)}
      />
    </div>
  );
};

export default MangeFinancialAidRequests;
