import Joi from 'joi';
import { GetAllTodosFiltersDto } from '../../dto/todo/get-all-todos.dto';

export const getAllTodosSchema = Joi.object<GetAllTodosFiltersDto>({
  limit: Joi.number().positive().allow(0).integer().optional(),
  offset: Joi.number().positive().allow(0).integer().optional(),
  isPublic: Joi.boolean().optional(),
  isChecked: Joi.boolean().optional(),
  isPrivate: Joi.boolean().optional(),
  query: Joi.string().optional()
});
