import styled from 'styled-components';
import { COLORS, FONTS } from '../../../../theme';
import { BORDER_RADIUS } from '../../../../theme/border-radius.const';
import { rem } from '../../../../theme/rem.util';

export const Table = styled.div`
  margin-bottom: ${rem(40)};
  border-radius: ${BORDER_RADIUS.default};
  background: transparent;
  font-family: ${FONTS.FAMILIES.primary};
  font-size: ${FONTS.SIZES.m};
  flex-grow: 1;
  overflow: auto;
`;

export const TableHeader = styled.div<{ $gridTemplateColumns: string }>`
  margin-top: ${rem(40)};
  display: grid;
  grid-template-columns: ${(props) => props.$gridTemplateColumns};
  color: ${COLORS.gray};
  padding: 0 ${rem(16)} ${rem(16)} ${rem(12)};
`;

export const TableBody = styled.div`
  display: grid;
  gap: ${rem(8)};
`;
