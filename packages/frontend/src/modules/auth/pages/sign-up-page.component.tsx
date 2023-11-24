import { FormContainer } from '../../common/components/containers/form-container/form-container.styled';
import AuthLayout from '../../common/components/layouts/auth-layout/auth-layout.component';
import SignUpForm from '../forms/sign-up-form.component';

// eslint-disable-next-line arrow-body-style
const SignUpPage = () => {
  return (
    <AuthLayout>
      <FormContainer>
        <SignUpForm />
      </FormContainer>
    </AuthLayout>
  );
};
export default SignUpPage;
