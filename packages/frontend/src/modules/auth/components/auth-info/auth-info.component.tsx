import { ReactNode } from 'react';
import * as Styled from './auth-info.styled';

type Props = {
  heading: string;
  message: string;
  youCanNowCloseThisTab?: boolean;
  children?: ReactNode;
};

// eslint-disable-next-line arrow-body-style
const AuthInfo = ({ heading, message, youCanNowCloseThisTab, children }: Props) => {
  return (
    <Styled.AuthInfoContainer>
      <Styled.AuthInfoHeading>{heading}</Styled.AuthInfoHeading>
      <Styled.AuthInfoMessage>
        {message}
        <br />

        {youCanNowCloseThisTab && 'You can now close this tab.'}
      </Styled.AuthInfoMessage>
      {children}
    </Styled.AuthInfoContainer>
  );
};
export default AuthInfo;
