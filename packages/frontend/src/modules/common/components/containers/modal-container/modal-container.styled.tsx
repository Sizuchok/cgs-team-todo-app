import { styled } from 'styled-components';
import { BORDER_RADIUS } from '../../../../theme/border-radius.const';
import { COLORS } from '../../../../theme/colors.const';
import { rem } from '../../../../theme/rem.util';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: ${BORDER_RADIUS.default};
  width: ${rem(595)};
  max-height: 90%;
  background-color: ${COLORS.white};
  overflow-y: auto;
  position: relative;
  margin: 0 ${rem(25)};
  padding: 0 ${rem(25)};
  box-shadow: 0 0 50px 15px rgba(0, 0, 0, 0.1);
`;
