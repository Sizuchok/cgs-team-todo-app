import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import { CoreEntity } from '../entities/core.entity';
import { HttpError } from '../exceptions/HttpError';

export const isExist =
  <T extends typeof CoreEntity>(entity: T) =>
  async (request: Request<{ id: string }>, response: Response, next: NextFunction) => {
    const { id } = request.params;

    try {
      await Joi.string()
        .uuid()
        .error(new HttpError(StatusCodes.BAD_REQUEST, 'Invalid UUID'))
        .validateAsync(id);

      const entityRecord = await entity.findOneBy({ id });

      if (!entityRecord) {
        throw new HttpError(
          StatusCodes.BAD_REQUEST,
          `${entity.name} with { id: ${id} } does not exist`
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
