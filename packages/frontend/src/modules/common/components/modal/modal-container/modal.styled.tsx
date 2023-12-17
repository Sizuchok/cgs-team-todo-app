import MUIModal from '@mui/material/Modal';
import styled from 'styled-components';
import { rem } from '../../../../theme/rem.util';

export const Modal = styled(MUIModal)`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div[tabindex='-1'] {
    display: flex;
    width: ${rem(595)};
  }
`;
