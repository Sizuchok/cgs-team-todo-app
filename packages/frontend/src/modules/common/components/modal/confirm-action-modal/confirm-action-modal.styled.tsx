import styled from 'styled-components';
import { FONTS } from '../../../../theme';
import { BORDER_RADIUS } from '../../../../theme/border-radius.const';
import { COLORS } from '../../../../theme/colors.const';
import { rem } from '../../../../theme/rem.util';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: ${BORDER_RADIUS.default};
  background-color: ${COLORS.white};
  overflow-y: auto;
  margin: 0 ${rem(25)};
  padding: ${rem(30)};
  box-shadow: 0 0 50px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Buttons = styled.div`
  margin-top: ${rem(50)};

  & > * + * {
    margin-left: ${rem(100)};
  }
`;

export const Title = styled.h3`
  font-family: ${FONTS.FAMILIES.forms};
  font-weight: ${FONTS.WEIGHTS.bolder};
  font-size: ${FONTS.SIZES.xl};
`;
