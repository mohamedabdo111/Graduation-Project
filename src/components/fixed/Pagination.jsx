import React from "react";
import ReactPaginate from "react-paginate";

const PaginationCode = ({ pageCount, onpress }) => {
  const handlePageClick = (e) => {
    onpress(e.selected + 1);
  };

  return (
    <div className="m-auto">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center p-3"
        pageClassName="page-item"
        activeClassName="active text-blue-700"
        pageLinkClassName="px-3 py-2 border rounded hover:bg-gray-200"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="px-3 py-2 border rounded hover:bg-gray-200"
        nextLinkClassName="px-3 py-2 border rounded hover:bg-gray-200"
        breakClassName="px-3 py-2 border rounded"
      />
    </div>
  );
};

export default PaginationCode;
