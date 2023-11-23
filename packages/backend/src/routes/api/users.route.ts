import { Router } from 'express';
import { usersController } from '../../controllers/users.controller';
import { User } from '../../entities/user.entity';
import { authMiddleware } from '../../middleware/auth.middleware';
import { isExist } from '../../middleware/is-exist.middleware';
import { validator } from '../../middleware/validator.middleware';
import { updateUserSchema } from '../../schemas/user/update-user.schema';
import { controllerWrapper } from '../../utils/controller-wrapper.util';

const usersRouter: Router = Router();

usersRouter.patch(
  '/:id',
  authMiddleware,
  isExist(User),
  validator.body(updateUserSchema),
  controllerWrapper(usersController.updateUserById)
);

usersRouter.delete(
  '/:id',
  authMiddleware,
  isExist(User),
  controllerWrapper(usersController.removeUserById)
);

export default usersRouter;
