import styled from 'styled-components';
import { COLORS } from '../../../theme';
import { BORDER_RADIUS } from '../../../theme/border-radius.const';
import { rem } from '../../../theme/rem.util';

export const Container = styled.div`
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

export const Form = styled.div`
  width: 376px;
  display: block;

  form {
    padding-bottom: ${rem(40)};
    padding-top: ${rem(40)};
    display: flex;
    flex-direction: column;
    gap: ${rem(32)};
  }
`;
