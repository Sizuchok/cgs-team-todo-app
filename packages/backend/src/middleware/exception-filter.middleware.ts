import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpError } from '../exceptions/HttpError';

export const exceptionFilter = (
  error: HttpError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.status ?? StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || 'Something went wrong on our side.';

  response.status(status).send({ status, message });

  next();
};
