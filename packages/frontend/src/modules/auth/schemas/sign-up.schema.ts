import * as yup from 'yup';
import { SignUp } from '../../common/types/auth.types';

export const signUpSchema = yup.object<SignUp>().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(16, 'Name must be at most 16 characters long')
    .required('Name is required'),
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
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required("Don't forget to confirm your password")
});
