import { FormContainer } from '../../common/components/containers/form-container/form-container.styled';
import AuthLayout from '../../common/components/layouts/auth-layout/auth-layout.component';
import SignInForm from '../forms/sign-in-form.component';

// eslint-disable-next-line arrow-body-style
const SignInPage = () => {
  return (
    <AuthLayout>
      <FormContainer>
        <SignInForm />
      </FormContainer>
    </AuthLayout>
  );
};
export default SignInPage;
