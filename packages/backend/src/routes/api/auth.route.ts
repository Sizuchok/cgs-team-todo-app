import { Router } from 'express';
import { authController } from '../../controllers/auth.controller';
import { authMiddleware } from '../../middleware/auth.middleware';
import { validator } from '../../middleware/validator.middleware';
import { activateUserSchema } from '../../schemas/auth/activate-user-request';
import { forgotPasswordSchema } from '../../schemas/auth/forgot-password.schema';
import { resetPasswordSchema } from '../../schemas/auth/reset-password.schema';
import { signInSchema } from '../../schemas/auth/sign-in.schema';
import { signUpSchema } from '../../schemas/auth/sign-up.schema';
import { controllerWrapper } from '../../utils/controller-wrapper.util';

const authRouter: Router = Router();

authRouter.post('/sign-up', validator.body(signUpSchema), controllerWrapper(authController.signUp));

authRouter.post(
  '/activate',
  validator.body(activateUserSchema),
  controllerWrapper(authController.activateUser)
);

authRouter.post('/sign-in', validator.body(signInSchema), controllerWrapper(authController.signIn));

authRouter.get('/get-me', authMiddleware, controllerWrapper(authController.getMe));

authRouter.post(
  '/forgot-password',
  validator.body(forgotPasswordSchema),
  controllerWrapper(authController.forgotPassword)
);

authRouter.post(
  '/reset-password',
  validator.body(resetPasswordSchema),
  controllerWrapper(authController.resetPassword)
);

export default authRouter;
