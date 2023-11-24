import Joi from 'joi';
import { ResetPasswordDto } from '../../dto/auth/reset-password-request.dto';

export const resetPasswordSchema = Joi.object<ResetPasswordDto>({
  token: Joi.string().uuid().message('Invalid reset password link').required(),
  newPassword: Joi.string()
    .min(8)
    .max(24)
    .regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)
    .message(
      'password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required()
});
