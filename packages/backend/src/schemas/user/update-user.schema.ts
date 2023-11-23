import Joi from 'joi';
import { UpdateUserDto } from '../../dto/user/update-user.dto';

export const updateUserSchema = Joi.object<UpdateUserDto>({
  name: Joi.string().min(2).max(16).optional(),
  email: Joi.string().email().optional(),
  password: Joi.string()
    .min(8)
    .max(24)
    .regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)
    .message(
      'password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .optional()
});
