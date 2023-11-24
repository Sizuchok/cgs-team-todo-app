import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { GetAllTodosFiltersDto } from '../dto/todo/get-all-todos-filters.dto';
import { UserDto } from '../dto/user/user.dto';
import { todoService } from '../services/todo.service';

export class TodoController {
  async createTodo(req: Request, res: Response) {
    const user = req.user as UserDto;
    req.body.userId = user.id;
    const todo = await todoService.createTodo(req.body);
    res.status(StatusCodes.CREATED).json(todo);
  }

  async getTodoById(req: Request, res: Response) {
    const { id } = req.params;
    const todo = await todoService.findTodoById(id);
    res.json(todo);
  }

  async getAllTodos(request: Request, res: Response) {
    const filters = request.query as GetAllTodosFiltersDto;
    const user = request.user as UserDto;
    const todos = await todoService.findAllTodos(user, filters);

    res.json(todos);
  }

  async updateTodoById(req: Request, res: Response) {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTodo = await todoService.updateTodoById(id, updateData);

    res.json(updatedTodo);
  }

  async removeTodoById(req: Request, res: Response) {
    const { id } = req.params;

    await todoService.removeTodoById(id);

    res.status(StatusCodes.NO_CONTENT).send();
  }
}

export const todoController = new TodoController();
