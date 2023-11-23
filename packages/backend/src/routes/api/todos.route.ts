import { Router } from 'express';
import { todoController } from '../../controllers/todo.controller';
import { Todo } from '../../entities/todo.entity';

import { authMiddleware } from '../../middleware/auth.middleware';
import { checkOwnership } from '../../middleware/checkOwnership';
import { isExist } from '../../middleware/is-exist.middleware';
import { validator } from '../../middleware/validator.middleware';
import { createTodoSchema } from '../../schemas/todo/create-todo.schema';
import { updateTodoSchema } from '../../schemas/todo/update-todo.schema';
import { controllerWrapper } from '../../utils/controller-wrapper.util';

const todosRouter: Router = Router();

todosRouter.get('/', authMiddleware, controllerWrapper(todoController.getAllTodos));

todosRouter.get(
  '/:id',
  authMiddleware,
  checkOwnership,
  isExist(Todo),
  controllerWrapper(todoController.getTodoById)
);

todosRouter.post(
  '/',
  authMiddleware,
  validator.body(createTodoSchema),
  controllerWrapper(todoController.createTodo)
);

todosRouter.patch(
  '/:id',
  authMiddleware,
  isExist(Todo),
  checkOwnership,
  validator.body(updateTodoSchema),
  controllerWrapper(todoController.updateTodoById)
);

todosRouter.delete(
  '/:id',
  authMiddleware,
  checkOwnership,
  isExist(Todo),
  controllerWrapper(todoController.removeTodoById)
);

export default todosRouter;
