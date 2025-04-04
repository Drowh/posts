import * as SC from "./styles";
import { useState } from "react";

export const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <SC.PageButton
          key={i}
          isActive={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </SC.PageButton>
      );
    }

    return pages;
  };

  return (
    <SC.PaginationContainer>
      <SC.PageButton
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
      >
        Первая
      </SC.PageButton>
      <SC.PageButton
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Предыдущая
      </SC.PageButton>
      {renderPageNumbers()}
      <SC.PageButton
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Следующая
      </SC.PageButton>
      <SC.PageButton
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages)}
      >
        Последняя
      </SC.PageButton>
    </SC.PaginationContainer>
  );
};