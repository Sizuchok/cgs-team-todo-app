import { FormContainer } from '../../common/components/containers/form-container/form-container.styled';
import AuthLayout from '../../common/components/layouts/auth-layout/auth-layout.component';
import ForgotPasswordForm from '../forms/forgot-password-form.component';

// eslint-disable-next-line arrow-body-style
const ForgotPasswordPage = () => {
  return (
    <AuthLayout>
      <FormContainer>
        <ForgotPasswordForm />
      </FormContainer>
    </AuthLayout>
  );
};
export default ForgotPasswordPage;
