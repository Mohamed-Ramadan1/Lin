const Pagination = ({ currentPage, isMorePages, onPrevPage, onNextPage }) => {
  return (
    <div className="my-5 flex justify-end">
      <div className="join bg-white p-2 rounded shadow">
        <button
          className="join-item btn"
          onClick={onPrevPage}
          disabled={currentPage <= 1}
        >
          «
        </button>
        <button className="join-item btn">Page {currentPage}</button>
        <button
          className="join-item btn"
          disabled={!isMorePages}
          onClick={onNextPage}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
