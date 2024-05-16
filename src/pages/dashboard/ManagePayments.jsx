import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  PaymentRecordELements,
  PaymentsTableHeader,
  Pagination,
} from "../../components";

const ManagePayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.userReducers);

  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await customFetch.get("paymentRecords", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });

        if (response.data.data.paymentRecords) {
          setPayments(response.data.data.paymentRecords);
          setIsMorePages(
            response.data.data.paymentRecords.length === itemsPerPage
          );
        } else {
          setPayments([]);
          setIsMorePages(false);
        }

        setLoading(false);
      } catch (error) {
        setError(error.response.data.error);
        setLoading(false);
      }
    };

    fetchPayments();
  }, [token, currentPage, itemsPerPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (isMorePages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="p-5">
      <PageIntro pageName="Payments" />
      <PageContainer tableHeader={"Payments"}>
        <PaymentsTableHeader />
        {loading && (
          <tr>
            <td colSpan="10" className="text-center p-5 text-3xl">
              Loading........
            </td>
          </tr>
        )}

        {!loading &&
          payments.length > 0 &&
          payments.map((payment, index) => (
            <PaymentRecordELements
              key={payment._id}
              payment={payment}
              token={token}
            />
          ))}

        {!loading && payments.length === 0 && (
          <tr>
            <td colSpan="10" className="text-center p-5 text-3xl">
              No Payments Found
            </td>
          </tr>
        )}
      </PageContainer>
      {payments.length > 0 && (
        <Pagination
          currentPage={currentPage}
          isMorePages={isMorePages}
          onPrevPage={prevPage}
          onNextPage={nextPage}
        />
      )}
    </div>
  );
};

export default ManagePayments;
