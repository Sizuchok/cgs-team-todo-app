import { TodoDto } from './todo.dto';

export type CreateTodoDto = Omit<TodoDto, 'id' | 'isChecked'>;
