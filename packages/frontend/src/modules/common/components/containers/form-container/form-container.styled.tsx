import { styled } from 'styled-components';
import { rem } from '../../../../theme/rem.util';

export const FormContainer = styled.div`
  width: ${rem(376)};
  display: block;
  padding-top: ${rem(40)};
  padding-bottom: ${rem(40)};

  form {
    display: flex;
    flex-direction: column;
    gap: ${rem(32)};
    padding-top: ${rem(40)};
    padding-bottom: ${rem(40)};
  }
`;
