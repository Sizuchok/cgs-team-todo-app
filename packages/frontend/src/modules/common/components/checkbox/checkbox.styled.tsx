import styled from 'styled-components';
import checkboxTick from '../../../../assets/image/checkbox-tick.svg';
import { COLORS, FONTS } from '../../../theme';
import { rem } from '../../../theme/rem.util';

export const CheckboxContainer = styled.div`
  height: ${rem(24)};
  display: flex;
  align-items: center;
  font-family: ${FONTS.FAMILIES.forms};
`;

export const CheckboxInput = styled.input`
  width: ${rem(20)};
  height: ${rem(20)};
  -webkit-appearance: none;
  appearance: none;
  border-radius: 3px;
  border: 1px solid ${COLORS.border};
  margin-right: ${rem(16)};
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 2px solid ${COLORS.inputFocus};
  }

  &:checked {
    background-color: ${COLORS.inputFocus};
    border: 0;
  }

  &:checked::before {
    content: url(${checkboxTick});
    width: ${rem(12)};
  }

  &:checked:disabled {
    background-color: ${COLORS.border};

    &:hover {
      cursor: default;
    }
  }

  &:not(:checked):disabled {
    &:hover {
      border: 1px solid ${COLORS.border};
      cursor: default;
    }
  }
`;

export const CheckboxLabel = styled.label`
  font-size: ${FONTS.SIZES.s};
  font-weight: ${FONTS.WEIGHTS.normal};
  color: #505e68;
`;
