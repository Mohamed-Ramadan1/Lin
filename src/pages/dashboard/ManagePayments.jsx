import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { customFetch } from "../../utils/customFetch";
import {
  PageIntro,
  PageContainer,
  PaymentRecordELements,
  PaymentsTableHeader,
} from "../../components";

const ManagePayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
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
        <PageIntro pageName="Payments" />
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
