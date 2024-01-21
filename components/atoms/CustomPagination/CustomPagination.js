import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";

const CustomPagination = ({ forcePage, initialPage, onChange, pageCount }) => {
  const [page, setPage] = useState(0);

  const hasClickedNumber = useRef(false);

  const handlePageChange = (page) => {
    hasClickedNumber.current = true;
    setPage(page);
  };

  useEffect(() => {
    if (hasClickedNumber.current) {
      onChange(page);
    }
  }, [page]);
  return (
    <div>
      <ReactPaginate
        activeClassName={"pagination_active   text-white bg-HavannaGreen-secondary"}
        className="flex justify-center items-center gap-4"
        containerClassName={"pagination"}
        disabledClassName={"pagination_disabled"}
        disableInitialCallback={true}
        forcePage={forcePage}
        initialPage={initialPage}
        marginPagesDisplayed={pageCount > 5 && page > 3 ? 1 : 2}
        // nextLabel={<div className="border px-8 py-3 text-12 rounded-[4px]">Next</div>}
        nextLabel={<ChevronRightIcon className="text-HavannaBlack-primary" width={16} />}
        nextLinkClassName={"next_page"}
        onPageChange={(data) => handlePageChange(data.selected)}
        pageClassName="border w-[32px] h-[32px] rounded-full border flex justify-center items-center border-HavannaGreen-secondary"
        pageCount={pageCount}
        pageRangeDisplayed={0}
        // previousLabel={<p className="border px-8 py-3 text-12 rounded-[4px]">Previous</p>}
        previousLabel={<ChevronLeftIcon className="text-HavannaBlack-primary" width={16} />}
        previousLinkClassName={"previous_page"}
      />
    </div>
  );
};

export default CustomPagination;
