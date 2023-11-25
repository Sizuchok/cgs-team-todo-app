import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ReactPaginateProps } from 'react-paginate';
import * as Styled from './pagination.styled';

type PaginationProps = ReactPaginateProps & {
  pageCount: number;
};

const Pagination = ({
  pageCount,
  ...paginationProps
}: // eslint-disable-next-line arrow-body-style
PaginationProps) => {
  return (
    <Styled.ReactPaginateStyled
      {...paginationProps}
      previousLabel={<IoIosArrowBack />}
      nextLabel={<IoIosArrowForward />}
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      activeClassName="active"
    />
  );
};

export default Pagination;
