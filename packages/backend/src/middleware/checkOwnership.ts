import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserDto } from '../dto/user/user.dto';
import { Todo } from '../entities/todo.entity';
import { HttpError } from '../exceptions/HttpError';

export const checkOwnership = async (req: Request, _: Response, next: NextFunction) => {
  const todoId = req.params.id;
  const userId = (req.user as UserDto)?.id;

  try {
    const todo = await Todo.findOneBy({
      id: todoId,
      userId
    });

    if (!todo) {
      throw new HttpError(StatusCodes.FORBIDDEN, 'You do not have permission to edit this todo');
    }
  } catch (error) {
    next(error);
  }

  next();
};
