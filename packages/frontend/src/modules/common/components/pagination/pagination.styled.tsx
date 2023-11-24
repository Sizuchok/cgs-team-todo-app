import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const ReactPaginateStyled = styled(ReactPaginate)`
  font-family: ${FONTS.FAMILIES.primary};
  margin-top: auto;
  align-self: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 30px 0;

  li {
    margin: 0 5px;
  }

  a {
    cursor: pointer;
    padding: 7px 10px;
    border-radius: 5px;
    display: flex;
    margin: auto 0;

    &:hover {
      color: ${COLORS.primary};
    }
  }

  .previous,
  .next {
    font-weight: bold;
  }

  .disabled a {
    cursor: default;
    color: #999;
  }

  .active a {
    background-color: ${COLORS.primary};
    color: white;
  }
`;
