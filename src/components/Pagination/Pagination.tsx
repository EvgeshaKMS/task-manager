import React from 'react';

import { PaginationProps } from './types';
import styles from './Pagination.module.scss';
import { Button } from '../index';

const Pagination = ({ setPage, totalPages, currentPage }: PaginationProps) => {
  const pages = [currentPage - 1, currentPage, currentPage + 1];

  const handlePageChange = (page: number) => {
    if (currentPage !== page) {
      setPage(page);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.pagination}>
      {pages[0] > 1 && (
        <>
          <Button
            onClick={() => handlePageChange(1)}
            theme={currentPage === 1 ? 'filled' : 'outlined'}
          >
            1
          </Button>
          ...
        </>
      )}

      {pages.map((page) => {
        if (page < 1 || page > totalPages) return null;
        return (
          <Button
            onClick={() => handlePageChange(page)}
            theme={currentPage === page ? 'filled' : 'outlined'}
            key={page}
          >
            {page}
          </Button>
        );
      })}

      {pages[2] < totalPages && (
        <>
          ...
          <Button
            onClick={() => handlePageChange(totalPages)}
            theme={currentPage === totalPages ? 'filled' : 'outlined'}
          >
            {totalPages}
          </Button>
        </>
      )}
    </div>
  );
};

export default Pagination;
