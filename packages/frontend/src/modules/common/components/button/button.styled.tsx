import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';
import { BORDER_RADIUS } from '../../../theme/border-radius.const';
import { rem } from '../../../theme/rem.util';

export const Button = styled.button<{ $stretch?: boolean }>`
  font-family: ${FONTS.FAMILIES.forms};
  height: ${rem(56)};
  border: 0;
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.m};
  transition: background-color 0.3s;
  padding: 0 ${rem(20)};
  ${(props) => (props.$stretch ? 'width: 100%;' : '')}

  color: ${COLORS.white};
  background-color: ${COLORS.primary};

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: ${COLORS.inputFocus};
    cursor: pointer;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:disabled {
    background-color: ${COLORS.disabled};

    &:hover {
      cursor: default;
    }
  }

  &.secondary {
    height: ${rem(36)};
    font-size: ${FONTS.SIZES.s};
    font-weight: ${FONTS.WEIGHTS.normal};
    background-color: ${COLORS.white};
    color: ${COLORS.black};
    outline: 1px solid ${COLORS.border};
    border-radius: ${BORDER_RADIUS.default};

    &:hover {
      color: ${COLORS.inputFocus};
      outline: 1px solid ${COLORS.inputFocus};
    }

    a:hover {
      color: ${COLORS.inputFocus};
      cursor: pointer;
    }
  }
`;
