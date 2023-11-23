import Joi from 'joi';
import { ResetPasswordDto } from '../../dto/auth/reset-password-request.dto';

export const resetPasswordSchema = Joi.object<ResetPasswordDto>({
  token: Joi.string().uuid().message('Invalid reset password link').required()
});
