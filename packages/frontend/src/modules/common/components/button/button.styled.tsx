import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';
import { rem } from '../../../theme/rem.util';

export const Button = styled.button`
  font-family: ${FONTS.FAMILIES.forms};
  height: ${rem(56)};
  border: 0;
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.m};
  transition: background-color 0.3s;
  padding: 0 ${rem(20)};
  /* width: fit-content; */

  a {
    text-decoration: none;
    color: inherit;
  }

  color: ${COLORS.white};
  background-color: ${COLORS.primary};

  &:hover {
    background-color: #0101ff;
    cursor: pointer;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:disabled {
    background-color: #d3beed;

    &:hover {
      cursor: default;
    }
  }
`;
