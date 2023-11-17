import Joi from 'joi';
import { UpdateTodoDto } from '../../dto/todo/update-todo.dto';

export const updateTodoSchema = Joi.object<UpdateTodoDto>({
  title: Joi.string().min(3).max(50).optional(),
  description: Joi.string().optional(),
  isPublic: Joi.boolean().optional(),
  isChecked: Joi.boolean().optional()
})
  .min(1)
  .message('Request body must have at least 1 property');
