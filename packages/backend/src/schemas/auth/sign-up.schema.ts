import Joi from 'joi';
import { CreateUserDto } from '../../dto/user/create-user.dto';

export const signUpSchema = Joi.object<CreateUserDto>({
  name: Joi.string().min(2).max(16).required(),
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
