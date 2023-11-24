import * as yup from 'yup';
import { FormResetPassword } from '../../common/types/auth.types';

export const resetPasswordSchema = yup.object<FormResetPassword>().shape({
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(24, 'Password must be at most 24 characters long')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      'Password must have a digit, a lowercase, and an uppercase letter'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required("Don't forget to confirm your password")
});
