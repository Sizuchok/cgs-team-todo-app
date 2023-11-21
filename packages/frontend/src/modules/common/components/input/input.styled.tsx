import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';
import { rem } from '../../../theme/rem.util';

export const InputConatiner = styled.div`
  font-size: ${15};
  // fix extra 2 pixels(1px, 1px) from outline
  // and align input with the rest of elements in container
  margin: 0 1px;
  font-family: ${FONTS.FAMILIES.forms};
  /* max-width: 300px; */

  &:focus-within label {
    color: ${COLORS.inputFocus};
  }
`;

export const Input = styled(Field)`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  outline: 1px solid ${COLORS.border};
  font-size: ${FONTS.SIZES.m};
  padding: ${rem(12)} ${rem(16)};
  margin-top: ${rem(4)};
  line-height: ${rem(24)};

  &:not(:placeholder-shown) {
    outline: 1px solid black;
  }

  &.error {
    outline: 2px solid ${COLORS.danger};
  }

  &:focus {
    outline: 2px solid ${COLORS.inputFocus};
  }

  &:disabled {
    background-color: #f3f5fa;
    outline: 1px solid ${COLORS.border};
    color: ${COLORS.border};
  }
`;

export const InputLabel = styled.label`
  font-weight: 400;
  color: #505e68;
  line-height: 24px;

  &.error {
    color: ${COLORS.danger};
  }
`;

export const Errors = styled(ErrorMessage)`
  margin-top: ${rem(10)};
  color: ${COLORS.danger};
  font-size: ${rem(12)};
  font-weight: ${FONTS.WEIGHTS.normal};
`;
