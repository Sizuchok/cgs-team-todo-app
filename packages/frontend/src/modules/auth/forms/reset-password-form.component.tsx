import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/components/button/button.component';
import Checkbox from '../../common/components/checkbox/checkbox.component';
import Input from '../../common/components/input/input';
import { APP_KEYS } from '../../common/consts';
import { FormResetPassword } from '../../common/types/auth.types';
import AuthInfo from '../components/auth-info/auth-info.component';
import { useResetPassword } from '../hooks/reset-password.hook';
import { resetPasswordSchema } from '../schemas/reset-password.schema';

type Props = {
  token: string;
};

const ResetPasswordForm = ({ token }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mutate, isSuccess, isLoading } = useResetPassword();

  const handleSubmit = ({ password }: FormResetPassword) => {
    mutate({ newPassword: password, token });
  };

  return isSuccess ? (
    <AuthInfo
      heading="Password reseted!"
      message="You can use your new password to sign into your account."
    >
      <Button type="link">
        <Link to={`../${APP_KEYS.BACKEND_KEYS.R_SIGN_IN}`} replace>
          Show me the dashboard
        </Link>
      </Button>
    </AuthInfo>
  ) : (
    <Formik<FormResetPassword>
      initialValues={{ password: '', confirmPassword: '' }}
      onSubmit={handleSubmit}
      validationSchema={resetPasswordSchema}
    >
      {({ errors, isValid }) => (
        <Form>
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
            title="Reset my password"
            type="button"
            disabled={!isValid || isLoading}
            isLoading={isLoading}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
