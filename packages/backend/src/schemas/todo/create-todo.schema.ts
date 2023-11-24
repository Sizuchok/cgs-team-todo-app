import Joi from 'joi';
import { CreateTodoDto } from '../../dto/todo/create-todo.dto';

export const createTodoSchema = Joi.object<CreateTodoDto>({
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().allow(''),
  isPublic: Joi.boolean().required(),
  userId: Joi.string().uuid().optional()
});
