import styled from 'styled-components';
import { rem } from '../../../theme/rem.util';

export const Filters = styled.div<{ $reversedWrap?: boolean }>`
  display: flex;
  gap: ${rem(10)};
  flex-wrap: ${(props) => (props.$reversedWrap ? 'wrap-reverse' : 'wrap')};
`;
