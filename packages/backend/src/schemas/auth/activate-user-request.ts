import Joi from 'joi';
import { ActivateUserDto } from '../../dto/auth/activate-user-request.dto';

export const activateUserSchema = Joi.object<ActivateUserDto>({
  token: Joi.string().uuid().message('Invalid account activation link').required()
});
