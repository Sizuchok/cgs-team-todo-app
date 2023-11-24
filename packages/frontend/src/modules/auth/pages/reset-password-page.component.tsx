import { Navigate, useLocation } from 'react-router-dom';
import { FormContainer } from '../../common/components/containers/form-container/form-container.styled';
import AuthLayout from '../../common/components/layouts/auth-layout/auth-layout.component';
import { APP_KEYS } from '../../common/consts';
import ResetPasswordForm from '../forms/reset-password-form.component';

const ResetPasswordPage = () => {
  const location = useLocation();

  const urlQueryParams = new URLSearchParams(location.search);
  const token = urlQueryParams.get(APP_KEYS.PARAMS_KEYS.TOKEN);

  if (!token) {
    return <Navigate to={`../${APP_KEYS.BACKEND_KEYS.R_SIGN_IN}`} replace />;
  }

  return (
    <AuthLayout>
      <FormContainer>
        <ResetPasswordForm token={token} />
      </FormContainer>
    </AuthLayout>
  );
};
export default ResetPasswordPage;
