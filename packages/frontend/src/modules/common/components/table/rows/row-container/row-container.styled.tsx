import styled from 'styled-components';
import { COLORS } from '../../../../../theme';
import { BORDER_RADIUS } from '../../../../../theme/border-radius.const';
import { rem } from '../../../../../theme/rem.util';

export const Row = styled.div<{ $darker?: boolean; $gridTemplateColumns: string }>`
  grid-template-columns: ${(props) => props.$gridTemplateColumns};
  background: ${(props) => (props.$darker ? '#EAEAEA' : COLORS.white)};
  display: grid;
  padding: ${rem(0)} ${rem(16)} ${rem(0)} ${rem(12)};
  border-radius: ${BORDER_RADIUS.default};
  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.black};
  height: 56px;
  position: relative;

  & > div {
    margin: auto 0;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
