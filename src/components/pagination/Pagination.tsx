import React, { useState } from 'react';
import './pagination.css';

interface IPaginationProps {
  totalPages: number;
  handleClick: (arg0: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({ totalPages, handleClick }): JSX.Element => {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const handleChangePage = (num: number) => {
    setSelectedPage(num);
    handleClick(num);
  }

  const renderPagination = () => {
    const maxPagesToShow = 10;
    const pages = [];
    let startPage = 1;
    if (totalPages > 500) {
      totalPages = 500
    }
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (selectedPage > Math.floor(maxPagesToShow / 2)) {
      startPage = Math.max(1, selectedPage - Math.floor(maxPagesToShow / 2));
      endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    }

    if (startPage > 1) {
      pages.push(
        <button key={1} className="pagination-btn" onClick={() => handleChangePage(1)}>
          1
        </button>
      );

      if (startPage > 2) {
        pages.push(
          <span key="ellipsis-start" className="pagination-ellipsis">
            ...
          </span>
        );
      }
    }

    for (let num = startPage; num <= endPage; num++) {
      pages.push(
        <button
          key={num}
          className={num === selectedPage ? 'pagination-btn' : 'selected-btn'}
          onClick={() => handleChangePage(num)}
        >
          {num}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis-end" className="pagination-ellipsis">
            ...
          </span>
        );
      }

      pages.push(
        <button key={totalPages} className="pagination-btn" onClick={() => handleChangePage(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <nav className="pagination">
      <button
        className="pagination-btn"
        onClick={() => handleChangePage(1)}
        disabled={selectedPage === 1}
      >
        &laquo;
      </button>
      {renderPagination()}
      <button
        className="pagination-btn"
        onClick={() => handleChangePage(totalPages)}
        disabled={selectedPage === totalPages}
      >
        &raquo;
      </button>
    </nav>
  );
};

export default Pagination;
