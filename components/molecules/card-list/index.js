import React, { useState, useCallback } from "react";
import Card from "components/molecules/card";
import { usePagination, DOTS } from "./usePagination";
import css from "./card-list.module.scss";

function CardList({ data, className = "" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const paginationRange = usePagination({
    totalCount: data.length,
    pageSize: itemsPerPage,
    siblingCount: 1,
    currentPage
  });

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = useCallback((pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  }, [data.length, itemsPerPage]);

  return (
    <div className={`${css["card-list"]} ${className}`}>
      <div className={css["card-grid"]}>
        {currentData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div className={css["pagination"]}>
        <button
          className={css["page-button"]}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          aria-label="First Page"
        >
          &laquo;
        </button>
        <button
          className={css["page-button"]}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous Page"
        >
          &lsaquo;
        </button>
        {paginationRange.map((page, index) =>
          page === DOTS ? (
            <span key={index} className={css["dots"]}>
              {DOTS}
            </span>
          ) : (
            <button
              key={index}
              className={`${css["page-button"]} ${
                currentPage === page ? css["active"] : ""
              }`}
              onClick={() => handlePageChange(page)}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          )
        )}
        <button
          className={css["page-button"]}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          aria-label="Next Page"
        >
          &rsaquo;
        </button>
        <button
          className={css["page-button"]}
          onClick={() => handlePageChange(Math.ceil(data.length / itemsPerPage))}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          aria-label="Last Page"
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}

export default CardList;
