import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const SignInLinkContainer = styled.div`
  text-align: center;
  font-size: ${FONTS.SIZES.s};
  font-family: ${FONTS.FAMILIES.forms};
  color: ${COLORS.gray};

  a {
    text-decoration: none;
    font-weight: ${FONTS.WEIGHTS.normal};
    color: ${COLORS.inputFocus};

    &:hover {
      text-decoration: underline;
    }
  }
`;
