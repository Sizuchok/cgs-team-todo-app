import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { Todo } from '../../entities/todo.entity';
import { isExist } from '../../middleware/is-exist.middleware';
import { validator } from '../../middleware/validator.middleware';
import { createTodoSchema } from '../../schemas/todo/create-todo.schema';
import { updateTodoSchema } from '../../schemas/todo/update-todo.schema';
import { controllerWrapper } from '../../utils/controller-wrapper.util';

const todosRouter: Router = Router();

todosRouter.get('/', controllerWrapper(todoController.getAllTodos));

todosRouter.get('/:id', isExist(Todo), controllerWrapper(todoController.getTodoById));

todosRouter.post(
  '/',
  validator.body(createTodoSchema),
  controllerWrapper(todoController.createTodo)
);

todosRouter.patch(
  '/:id',
  isExist(Todo),
  validator.body(updateTodoSchema),
  controllerWrapper(todoController.updateTodoById)
);

todosRouter.delete('/:id', isExist(Todo), controllerWrapper(todoController.removeTodoById));

export default todosRouter;
