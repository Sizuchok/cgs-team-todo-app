import { TodoDto } from './todo.dto';

export type UpdateTodoDto = Partial<Omit<TodoDto, 'id' | 'userId'>>;
