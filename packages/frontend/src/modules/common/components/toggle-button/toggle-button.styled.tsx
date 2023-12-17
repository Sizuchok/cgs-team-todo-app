import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';
import { BORDER_RADIUS } from '../../../theme/border-radius.const';
import { rem } from '../../../theme/rem.util';

export const ToggleButton = styled.button<{ $active: boolean; $color?: string }>`
  font-family: ${FONTS.FAMILIES.forms};
  border: 0;
  transition: background-color 0.3s;
  padding: 0 ${rem(20)};
  height: ${rem(36)};
  font-size: ${FONTS.SIZES.s};
  font-weight: ${FONTS.WEIGHTS.normal};
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  outline: 1px solid ${COLORS.border};
  border-radius: ${BORDER_RADIUS.default};
  ${(props) => (props.$active ? `outline: 1px solid ${props.$color || COLORS.inputFocus};` : '')}
  ${(props) => (props.$active ? `color: ${props.$color || COLORS.inputFocus};` : '')}

  &:hover {
    cursor: pointer;
  }
`;
