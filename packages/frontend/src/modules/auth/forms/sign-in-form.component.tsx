import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Button from '../../common/components/button/button.component';
import Checkbox from '../../common/components/checkbox/checkbox.component';
import Input from '../../common/components/input/input';
import { APP_KEYS } from '../../common/consts';
import { SignIn } from '../../common/types/auth.types';
import ResetPasswordLink from '../components/reset-password-link/reset-password-link.component';
import { useSignIn } from '../hooks/sign-in.hook';
import { signInSchema } from '../schemas/sign-in.schema';

const SignInForm = () => {
  const { state } = useLocation();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mutate, isSuccess, isLoading } = useSignIn();

  const handleSubmit = (data: SignIn) => {
    mutate(data);
  };

  return isSuccess ? (
    <Navigate to={state?.from ?? `/${APP_KEYS.ROUTER_KEYS.TODOS}`} replace />
  ) : (
    <Formik<SignIn>
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={signInSchema}
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
          <Input
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            errors={!!errors.password}
            placeholder="Enter your password"
            disabled={isLoading}
          />

          <Checkbox
            label="Show Password"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />

          <Button
            title="Let me in!"
            type="button"
            disabled={!isValid || isLoading}
            isLoading={isLoading}
          />
          <ResetPasswordLink />
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
