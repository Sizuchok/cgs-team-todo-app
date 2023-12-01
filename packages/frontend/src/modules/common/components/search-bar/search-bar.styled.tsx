import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';
import { BORDER_RADIUS } from '../../../theme/border-radius.const';
import { rem } from '../../../theme/rem.util';

export const SearchBarContainer = styled.div`
  height: ${rem(36)};
  outline: 1px solid ${COLORS.border};
  padding-left: ${rem(14)};
  padding-right: ${rem(8)};
  border-radius: ${BORDER_RADIUS.default};
  display: flex;
  align-items: center;
  gap: ${rem(10)};
  background-color: ${COLORS.white};

  & > svg {
    flex-shrink: 0;
  }
`;

export const Input = styled.input`
  font-family: ${FONTS.FAMILIES.primary};
  all: unset;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-size: ${rem(14)};
  font-weight: ${FONTS.WEIGHTS.normal};

  &::placeholder {
    color: ${COLORS.gray};
  }
`;
