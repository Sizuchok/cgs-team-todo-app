import { styled } from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const ResetPasswordLink = styled.div`
  text-align: center;
  font-size: ${FONTS.SIZES.s};
  font-family: ${FONTS.FAMILIES.forms};

  a {
    color: ${COLORS.gray};
    text-decoration: none;
    font-weight: ${FONTS.WEIGHTS.normal};

    &:hover {
      text-decoration: underline;
    }
  }
`;
