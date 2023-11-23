import Joi from 'joi';
import { SignInDto } from '../../dto/auth/sign-in-request.dto';

export const signInSchema = Joi.object<SignInDto>({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(24)
    .regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)
    .message(
      'password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required()
});
