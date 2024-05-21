import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  FinancialAidRequestHeader,
  FinancialAidRequestElement,
  Pagination,
} from "../../components";

const MangeFinancialAidRequests = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [financialAidRequests, setFinancialAidRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [isMorePages, setIsMorePages] = useState(false);

  useEffect(() => {
    const fetchFinancialAidRequests = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await customFetch.get(
          "admin/getAllFinancialAidRequests",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              page: currentPage,
              limit: itemsPerPage,
            },
          }
        );

        const fetchedFinancialAidsApplications =
          response.data.data.financialAidRequests;

        if (fetchedFinancialAidsApplications.length < itemsPerPage) {
          setIsMorePages(false);
        } else {
          setIsMorePages(true);
        }

        setFinancialAidRequests(fetchedFinancialAidsApplications);
      } catch (error) {
        setError(
          error.message || "Failed to fetch  Financial Aids Applications "
        );
      } finally {
        setLoading(false);
        setIsChanged(false);
      }
    };

    fetchFinancialAidRequests();
  }, [token, isChanged, currentPage, itemsPerPage]);

  return (
    <div className="p-5">
      <PageIntro pageName="Financial Aids requests" />
      <PageContainer tableHeader="Financial Aids requests">
        <FinancialAidRequestHeader />
        {loading ? (
          <tr>
            <td colSpan="10" className="text-center p-5 text-3xl">
              Loading Financial Aids Requests......
            </td>
          </tr>
        ) : error ? (
          <div className="flex justify-center items-center h-10">
            <p className="text-2xl font-semibold text-red-500">{error}</p>
          </div>
        ) : financialAidRequests.length > 0 ? (
          financialAidRequests.map((request, index) => (
            <FinancialAidRequestElement
              key={request._id}
              request={request}
              // index={index + 1 + (currentPage - 1) * itemsPerPage}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-10">
            <p className="text-2xl font-semibold">
              No Financial Aid Requests were requested
            </p>
          </div>
        )}
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
