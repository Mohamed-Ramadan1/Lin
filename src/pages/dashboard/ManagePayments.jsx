import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  PaymentRecordELements,
  PaymentsTableHeader,
  Pagination,
  LoadingWhile,
  Error,
  NotFoundData,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

const ManagePayments = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "/paymentRecords",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: currentPage,
        limit: itemsPerPage,
        sort: "-createdAt",
      },
      requestedData: "paymentRecords",
    }
  );

  useEffect(() => {
    fetchData();
  }, [token, currentPage, itemsPerPage]);

  return (
    <div className="p-5">
      <PageIntro pageName="Payments" />
      <PageContainer tableHeader={"Payments"}>
        <PaymentsTableHeader />
        {loading && <LoadingWhile />}

        {!loading &&
          data.length > 0 &&
          data.map((payment, index) => (
            <PaymentRecordELements
              key={payment._id}
              payment={payment}
              token={token}
            />
          ))}

        {!loading && data.length === 0 && (
          <NotFoundData message={"No payment records Found "} />
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

export default ManagePayments;
