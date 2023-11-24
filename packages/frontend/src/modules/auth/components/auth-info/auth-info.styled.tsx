import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';
import { rem } from '../../../theme/rem.util';

export const AuthInfoContainer = styled.div`
  font-family: ${FONTS.FAMILIES.forms};
  text-align: center;
`;

export const AuthInfoHeading = styled.h2`
  font-size: ${FONTS.SIZES.xl};
  font-weight: ${FONTS.WEIGHTS.bold};
`;

export const AuthInfoMessage = styled.p`
  margin: ${rem(20)} 0;
  color: ${COLORS.gray};
  font-size: ${FONTS.SIZES.l};
`;
