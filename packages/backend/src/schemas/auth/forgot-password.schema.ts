import Joi from 'joi';
import { ForgotPasswordDto } from '../../dto/auth/forgot-password-request.dto';

export const forgotPasswordSchema = Joi.object<ForgotPasswordDto>({
  email: Joi.string().email().required()
});
