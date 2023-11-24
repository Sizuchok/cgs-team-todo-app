import { APP_KEYS } from '../common/consts';
import { CreateTodo, Todo, UpdateTodo } from '../common/types/todo.types';
import { HttpService } from './http.service';

export class TodoService extends HttpService {
  public async getAllTodos() {
    const response = await this.get<Todo[], void>({});
    return response.data;
  }

  public async getTodoById(id: string) {
    const response = await this.get<Todo, void>({
      url: `${id}`
    });

    return response.data;
  }

  public async createTodo(data: CreateTodo) {
    const response = await this.post<Todo, CreateTodo>({ data });

    return response.data;
  }

  public async deleteTodoById(id: string) {
    await this.delete<void>({
      url: `${id}`
    });
  }

  public async updateTodoById(id: string, data: UpdateTodo) {
    const response = await this.patch<Todo, UpdateTodo>({
      url: `${id}`,
      data
    });

    return response.data;
  }
}

export const todoService = new TodoService(APP_KEYS.BACKEND_KEYS.BACK, APP_KEYS.BACKEND_KEYS.TODOS);
