import { BaseQueryParams } from './base-query-params.type';

export type Todo = {
  id: string;
  title: string;
  description: string;
  isChecked: boolean;
  isPublic: boolean;
};

export type CreateTodo = Omit<Todo, 'id' | 'isChecked'>;

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
