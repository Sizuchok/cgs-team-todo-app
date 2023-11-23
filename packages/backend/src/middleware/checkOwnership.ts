import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserDto } from '../dto/user/user.dto';
import { HttpError } from '../exceptions/HttpError';
import { todoService } from '../services/todo.service';

export const checkOwnership = async (req: Request, _: Response, next: NextFunction) => {
  const todoId = req.params.id;
  const userId = (req.user as UserDto)?.id;

  try {
    const todo = await todoService.findTodoById(todoId);

    if (todo.isPublic) return next();

    if (todo.userId === userId) return next();

    throw new HttpError(StatusCodes.FORBIDDEN, 'You do not have permission to edit this todo');
  } catch (error) {
    next(error);
  }
};
