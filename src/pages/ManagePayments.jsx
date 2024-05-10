import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../utils/customFetch";
import PageContainer from "../layout/dashboard/PageContainer";
import PaymentsTableHeader from "../layout/dashboard/PaymentsTableHeader";
import PaymentRecordELements from "../layout/dashboard/PaymentRecordELements";

const ManagePayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useSelector((state) => state.userReducers);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await customFetch.get("paymentRecords", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPayments(response.data.data.paymentRecords);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.error);
        setLoading(false);
      }
    };
    fetchPayments();
  }, [token]);

  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">
          Dashboard / <span className="text-blue-600">Payments </span>
        </h1>

        <PageContainer tableHeader={"Payments"}>
          <PaymentsTableHeader />
          {loading && <p>Loading...</p>}

          {payments &&
            payments
              .map((payment, index) => (
                <PaymentRecordELements
                  key={payment._id}
                  payment={payment}
                  token={token}
                  index={index + 1}
                />
              ))
              .reverse()
              .slice(0, 10)}
        </PageContainer>
      </div>
    </>
  );
};

export default ManagePayments;
