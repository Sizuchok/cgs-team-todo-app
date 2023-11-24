import { SignUp } from './auth.types';
import { CoreEntity } from './core-entity.type';
import { Todo } from './todo.types';

export type User = CoreEntity & {
  name: string;
  email: string;
  password: string;
  isActivated: boolean;
  token: string | null;
  todos: Todo[];
};

export type UpdateUser = Partial<Omit<SignUp, 'email'>>;

export type UpdateUserService = {
  id: string;
  data: UpdateUser;
};
