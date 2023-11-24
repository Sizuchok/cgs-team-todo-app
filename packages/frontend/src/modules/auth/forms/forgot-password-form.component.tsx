import { Form, Formik } from 'formik';
import Button from '../../common/components/button/button.component';
import Input from '../../common/components/input/input';
import { ForgotPassword } from '../../common/types/auth.types';
import AuthInfo from '../components/auth-info/auth-info.component';
import { useForgotPassword } from '../hooks/forgot-password.hook';
import { forgotPasswordSchema } from '../schemas/forgot-password.schema';

const ForgotPasswordForm = () => {
  const { mutate, isSuccess, isLoading } = useForgotPassword();

  const handleSubmit = (data: ForgotPassword) => {
    mutate(data);
  };

  return isSuccess ? (
    <AuthInfo
      heading="Check your email"
      message="We've sent a password reset link to the email address you provided."
      youCanNowCloseThisTab
    />
  ) : (
    <Formik<ForgotPassword>
      initialValues={{ email: '' }}
      onSubmit={handleSubmit}
      validationSchema={forgotPasswordSchema}
    >
      {({ errors, isValid }) => (
        <Form>
          <Input
            name="email"
            label="Email"
            type="email"
            errors={!!errors.email}
            placeholder="What's your email address?"
            disabled={isLoading}
          />

          <Button
            title="Submit"
            type="button"
            disabled={!isValid || isLoading}
            isLoading={isLoading}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
