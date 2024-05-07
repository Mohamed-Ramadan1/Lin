const PaymentsTableHeader = () => {
  return (
    <thead>
      <tr className="border-b">
        <th className="p-3">#num</th>
        <th className="p-3">User Name</th>
        <th className="p-3">Email</th>
        <th className="p-3">payment Verified</th>
        <th className="p-3">payment Amount</th>
        <th className="p-3">payment Status</th>
        <th className="p-3">Payment Date</th>
        <th className="p-3">Card Number</th>
      </tr>
    </thead>
  );
};

export default PaymentsTableHeader;
