import * as yup from 'yup';
import { UpdateUser } from '../../common/types/user.types';

export const updateUserSchema = yup.object<UpdateUser>().shape({
  name: yup
    .string()
    .transform((value) => (value === '' ? undefined : value))
    .min(2, 'Name must be at least 2 characters long')
    .max(16, 'Name must be at most 16 characters long')
    .optional(),

  password: yup
    .string()
    .transform((value) => (value === '' ? undefined : value))
    .min(8, 'Password must be at least 8 characters long')
    .max(24, 'Password must be at most 24 characters long')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      'Password must have a digit, a lowercase, and an uppercase letter'
    )
    .optional()
});
