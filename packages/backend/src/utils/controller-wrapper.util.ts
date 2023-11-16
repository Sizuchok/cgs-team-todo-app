import { NextFunction, Request, Response } from 'express';

export const controllerWrapper =
  (requestHandler: (request: Request, response: Response, next: NextFunction) => Promise<void>) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await requestHandler(request, response, next);
    } catch (error) {
      next(error);
    }
  };
