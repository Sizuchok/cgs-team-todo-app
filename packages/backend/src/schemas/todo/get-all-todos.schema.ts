import Joi from 'joi';
import { GetAllTodosFiltersDto } from '../../dto/todo/get-all-todos-filters.dto';

export const getAllTodosSchema = Joi.object<GetAllTodosFiltersDto>({
  limit: Joi.number().positive().integer().optional(),
  offset: Joi.number().positive().integer().optional(),
  isPublic: Joi.boolean().optional(),
  isChecked: Joi.boolean().optional(),
  isPrivate: Joi.boolean().optional(),
  query: Joi.string().optional()
});