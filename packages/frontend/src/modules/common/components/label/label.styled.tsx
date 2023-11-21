import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const Label = styled.label`
  font-family: ${FONTS.FAMILIES.primary};
  margin: auto 0;
  font-size: ${FONTS.SIZES.m};
  font-weight: ${FONTS.WEIGHTS.normal};
  color: ${COLORS.gray};
  white-space: nowrap;
`;
