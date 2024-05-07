import PageContainer from "../layout/dashboard/PageContainer";
import PaymentsTableHeader from "../layout/dashboard/PaymentsTableHeader";
const ManagePayments = () => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">
          Dashboard / <span className="text-blue-600">Payments </span>
        </h1>

        <PageContainer tableHeader={"Payments"}>
          <PaymentsTableHeader />
        </PageContainer>
      </div>
    </>
  );
};

export default ManagePayments;
