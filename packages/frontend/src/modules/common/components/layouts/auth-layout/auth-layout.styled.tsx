import styled from 'styled-components';
import { COLORS } from '../../../../theme';
import { BORDER_RADIUS } from '../../../../theme/border-radius.const';
import { rem } from '../../../../theme/rem.util';

export const AuthLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${COLORS.white};
`;

export const AuthLayoutMain = styled.div`
  display: flex;
  justify-content: center;
  width: ${rem(595)};
  max-height: 90%;
  background-color: ${COLORS.white};
  border-radius: ${BORDER_RADIUS.default};
  overflow-y: auto;
  margin: 0 ${rem(25)};
  padding: 0 ${rem(25)};
  box-shadow: 0 0 50px 15px rgba(0, 0, 0, 0.05);
`;
