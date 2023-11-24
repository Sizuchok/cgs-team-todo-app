import { ReactNode } from 'react';
import * as Styled from './auth-layout.styled';

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line arrow-body-style
const AuthLayout = ({ children }: Props) => {
  return (
    <Styled.AuthLayoutContainer>
      <Styled.AuthLayoutMain>{children}</Styled.AuthLayoutMain>
    </Styled.AuthLayoutContainer>
  );
};
export default AuthLayout;
