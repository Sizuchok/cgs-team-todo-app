import styled from 'styled-components';
import { COLORS } from '../../../theme';
import { rem } from '../../../theme/rem.util';

export const Actions = styled.div`
  display: flex;
  gap: ${rem(30)};
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
`;

type IconProps = {
  $hoverFill: 'default' | 'danger';
};

export const Icon = styled.div<IconProps>`
  fill: #bbb0c8;
  width: ${rem(30)};
  height: ${rem(30)};

  &:hover {
    fill: ${({ $hoverFill }) => ($hoverFill === 'default' ? COLORS.primary : 'red')};
    cursor: pointer;
  }
`;

export const IconTrashBin = styled(Icon)`
  &:hover {
    fill: red;
  }
`;
