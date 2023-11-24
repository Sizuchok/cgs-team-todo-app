import { User } from './user.types';

export type SignUp = {
  name: string;
  email: string;
  password: string;
};

export type FormSignUp = SignUp & {
  confirmPassword: string;
};

export type ActivateUser = {
  token: string;
};

export type ForgotPassword = {
  email: string;
};

export type FormResetPassword = {
  password: string;
  confirmPassword: string;
};

export type ResetPassword = {
  token: string;
  newPassword: string;
};

export type SignIn = {
  email: string;
  password: string;
};

export type SignInResponse = {
  user: User;
  accessToken: string;
};
