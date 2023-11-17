import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import todoService from '../services/todo.service';

export class TodoController {
  async createTodo(req: Request, res: Response) {
    const todo = await todoService.createTodo(req.body);
    res.status(StatusCodes.CREATED).json(todo);
  }

  async getTodoById(req: Request, res: Response) {
    const { id } = req.params;
    const todo = await todoService.findTodoById(id);
    res.json(todo);
  }

  async getAllTodos(_: Request, res: Response) {
    const todos = await todoService.findAllTodos();
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

const todoController = new TodoController();
export default todoController;
