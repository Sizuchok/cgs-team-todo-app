import { CoreEntityDto } from '../core-entity.dto';
import { TodoDto } from '../todo/todo.dto';

export type UserDto = CoreEntityDto & {
  name: string;
  email: string;
  password: string;
  isActivated: boolean;
  token: string | null;
  todos: TodoDto[];
};

export type UserDtoNoToken = Omit<UserDto, 'isActivated' | 'token'>;
