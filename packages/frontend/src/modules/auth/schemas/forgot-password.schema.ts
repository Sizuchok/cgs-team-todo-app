import * as yup from 'yup';
import { ForgotPassword } from '../../common/types/auth.types';

export const forgotPasswordSchema = yup.object<ForgotPassword>().shape({
  email: yup
    .string()
    .email("Sorry, but that email doesn't look right")
    .required('Email is required')
});
