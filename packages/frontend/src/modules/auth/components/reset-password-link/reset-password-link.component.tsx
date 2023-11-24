import { Link } from 'react-router-dom';
import { APP_KEYS } from '../../../common/consts';
import * as Styled from './reset-password-link.styled';

const ResetPasswordLink = () => (
  <Styled.ResetPasswordLink>
    <Link to={`../${APP_KEYS.BACKEND_KEYS.R_FORGOT_PASSWORD}`}>Forgot your password?</Link>
  </Styled.ResetPasswordLink>
);

export default ResetPasswordLink;
