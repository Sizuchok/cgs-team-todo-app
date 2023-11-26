import { BaseQueryParams } from '../../types/base-query-params.type';
import { TodoDto } from './todo.dto';

export type GetAllTodosFiltersDto = BaseQueryParams & {
  isChecked?: boolean;
  isPublic?: boolean;
  isPrivate?: boolean;
};

export type GetAllTodosResponseDto = {
  todos: TodoDto[];
  count: number;
};
