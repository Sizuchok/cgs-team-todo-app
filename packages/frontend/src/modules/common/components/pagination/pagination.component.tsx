import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import * as Styled from './pagination.styled';

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, pageCount, onPageChange }: PaginationProps) => {
  const handlePageClick = (data: { selected: number }) => {
    onPageChange(data.selected);
  };

  return (
    <Styled.ReactPaginateStyled
      previousLabel={<IoIosArrowBack />}
      nextLabel={<IoIosArrowForward />}
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      activeClassName="active"
      forcePage={currentPage}
    />
  );
};

export default Pagination;
