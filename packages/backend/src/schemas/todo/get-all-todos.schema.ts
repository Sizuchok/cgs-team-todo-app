/* eslint-disable newline-per-chained-call */
import Joi from 'joi';
import { GetAllTodosFiltersDto } from '../../dto/todo/get-all-todos.dto';

export const getAllTodosSchema = Joi.object<GetAllTodosFiltersDto>({
  limit: Joi.number().positive().allow(0).integer().optional(),
  offset: Joi.number().positive().allow(0).integer().optional(),
  isPublic: Joi.boolean().optional().default(false),
  isChecked: Joi.boolean().optional().default(false),
  isPrivate: Joi.boolean().optional().default(false),
  query: Joi.string().empty('').optional().default(null)
});
