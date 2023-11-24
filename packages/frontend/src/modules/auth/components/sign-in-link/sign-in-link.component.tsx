import { Link } from 'react-router-dom';
import { APP_KEYS } from '../../../common/consts';
import * as Styled from './sign-in-link.styled';

const SignInLink = () => (
  <Styled.SignInLinkContainer>
    Already have an account?&nbsp;
    <Link to={`../${APP_KEYS.BACKEND_KEYS.R_SIGN_IN}`}>Sign in instead</Link>
  </Styled.SignInLinkContainer>
);

export default SignInLink;
