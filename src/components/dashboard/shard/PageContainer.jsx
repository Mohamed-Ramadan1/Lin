const PageContainer = ({ tableHeader, children }) => {
  return (
    <div class=" rounded-lg mt-10 shadow border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h1 className="text-2xl font-semibold">{tableHeader}</h1>
      <div style={{ overflowX: "auto", overflowY: "auto" }}>
        <table className="w-full mt-5">{children}</table>
      </div>
    </div>
  );
};

export default PageContainer;
