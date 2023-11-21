import { APP_KEYS } from '../common/consts';
import { CreateTodo, Todo, UpdateTodo } from '../common/types/todo.types';
import { HttpService } from './http.service';

export class TodoService extends HttpService {
  public async getAllTodos() {
    const response = await this.get<Todo[], void>({
      url: `${APP_KEYS.BACKEND_KEYS.TODOS}`
    });
    return response.data;
  }

  public async getTodoById(id: string) {
    const response = await this.get<Todo, void>({
      url: `${APP_KEYS.BACKEND_KEYS.TODOS}/${id}`
    });

    return response.data;
  }

  public async createTodo(data: CreateTodo) {
    const response = await this.post<Todo, CreateTodo>({
      url: `${APP_KEYS.BACKEND_KEYS.TODOS}`,
      data
    });

    return response.data;
  }

  public async deleteTodoById(id: string) {
    await this.delete<void>({
      url: `${APP_KEYS.BACKEND_KEYS.TODOS}/${id}`
    });
  }

  public async updateTodoById(id: string, data: UpdateTodo) {
    const response = await this.patch<Todo>({
      url: `${APP_KEYS.BACKEND_KEYS.TODOS}/${id}`,
      data
    });

    return response.data;
  }
}

export const todoService = new TodoService('http://localhost:3030');
