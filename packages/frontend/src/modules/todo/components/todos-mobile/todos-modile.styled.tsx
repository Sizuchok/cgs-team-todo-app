import styled from 'styled-components';
import { rem } from '../../../theme/rem.util';

export const TodosMobileContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: ${rem(40)};

  & > * + * {
    margin-top: ${rem(30)};
  }
`;