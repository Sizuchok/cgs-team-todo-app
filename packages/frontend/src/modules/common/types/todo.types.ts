import { BaseQueryParams } from './base-query-params.type';
import { User } from './user.types';

export type Todo = {
  id: string;
  title: string;
  description: string;
  isChecked: boolean;
  isPublic: boolean;
  user: User;
};

export type CreateTodo = Omit<Todo, 'id' | 'isChecked' | 'user'>;

export type UpdateTodo = Partial<Omit<Todo, 'id'>>;

export type GetAllTodosFilters = BaseQueryParams & {
  isChecked?: boolean;
  isPublic?: boolean;
  isPrivate?: boolean;
};

export type GetAllTodosResponse = {
  todos: Todo[];
  count: number;
};
