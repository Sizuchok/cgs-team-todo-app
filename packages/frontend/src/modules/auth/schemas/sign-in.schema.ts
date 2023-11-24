import * as yup from 'yup';
import { SignIn } from '../../common/types/auth.types';

export const signInSchema = yup.object<SignIn>().shape({
  email: yup
    .string()
    .email("Sorry, but that email doesn't look right")
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(24, 'Password must be at most 24 characters long')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      'Password must have a digit, a lowercase, and an uppercase letter'
    )
    .required('Password is required')
});
