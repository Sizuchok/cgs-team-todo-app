import { styled } from 'styled-components';
import { COLORS, FONTS } from '../../../theme';
import { rem } from '../../../theme/rem.util';

export const TodoCard = styled.div`
  background-color: ${COLORS.white};
  font-family: ${FONTS.FAMILIES.primary};
  min-height: ${rem(300)};
  padding: ${rem(20)};
  display: flex;
  flex-direction: column;
`;

export const TodoCardTitle = styled.h4`
  font-size: ${FONTS.SIZES.l};
  margin-bottom: ${rem(10)};
`;

export const TodoCardDescription = styled.p`
  font-size: ${FONTS.SIZES.m};
`;

export const TodoCardActions = styled.div`
  margin: auto auto 0 auto;
`;

export const TodoCardOwner = styled.span`
  font-size: ${FONTS.SIZES.s};
  color: ${COLORS.gray};
`;

export const TodoCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
