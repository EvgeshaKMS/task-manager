import { Dispatch, SetStateAction } from 'react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage:  Dispatch<SetStateAction<number>>
}
