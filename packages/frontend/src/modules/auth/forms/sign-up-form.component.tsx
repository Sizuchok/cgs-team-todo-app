import { Form, Formik } from 'formik';
import { useState } from 'react';
import Button from '../../common/components/button/button.component';
import Checkbox from '../../common/components/checkbox/checkbox.component';
import Input from '../../common/components/input/input';
import { FormSignUp } from '../../common/types/auth.types';
import AuthInfo from '../components/auth-info/auth-info.component';
import SignInLink from '../components/sign-in-link/sign-in-link.component';
import { useSignUp } from '../hooks/sign-up.hook';
import { signUpSchema } from '../schemas/sign-up.schema';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mutate, isSuccess, isLoading } = useSignUp();

  const handleSubmit = ({ confirmPassword, ...data }: FormSignUp) => {
    mutate(data);
  };

  return isSuccess ? (
    <AuthInfo
      heading="Check your email"
      message="We've sent you an account activation link to the email address you provided."
      youCanNowCloseThisTab
    />
  ) : (
    <Formik<FormSignUp>
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      onSubmit={handleSubmit}
      validationSchema={signUpSchema}
    >
      {({ errors, isValid }) => (
        <Form>
          <Input
            name="name"
            label="Name"
            type="text"
            errors={!!errors.name}
            placeholder="What's your name?"
            disabled={isLoading}
          />

          <Input
            name="email"
            label="Email"
            type="email"
            errors={!!errors.email}
            placeholder="What's your email address?"
            disabled={isLoading}
          />
          <Input
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            errors={!!errors.password}
            placeholder="Enter your password"
            disabled={isLoading}
          />

          <Input
            name="confirmPassword"
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            errors={!!errors.confirmPassword}
            placeholder="Repeat your password"
            disabled={isLoading}
          />

          <Checkbox
            label="Show Password"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />

          <Button
            title="Sign Me Up!"
            type="button"
            disabled={!isValid || isLoading}
            isLoading={isLoading}
          />

          <SignInLink />
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
