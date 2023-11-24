import { FormContainer } from '../../common/components/containers/form-container/form-container.styled';
import AuthLayout from '../../common/components/layouts/auth-layout/auth-layout.component';
import ResetPasswordLink from '../components/reset-password-link/reset-password-link.component';
import SignInForm from '../forms/sign-in-form.component';

// eslint-disable-next-line arrow-body-style
const SignInPage = () => {
  return (
    <AuthLayout>
      <FormContainer>
        <div>
          <SignInForm />
          <ResetPasswordLink />
        </div>
      </FormContainer>
    </AuthLayout>
  );
};
export default SignInPage;
