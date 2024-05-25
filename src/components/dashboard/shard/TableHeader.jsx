const TableHeader = ({ children }) => {
  return (
    <thead>
      <tr className="border-b ">{children}</tr>
    </thead>
  );
};

// children is  th

export default TableHeader;
