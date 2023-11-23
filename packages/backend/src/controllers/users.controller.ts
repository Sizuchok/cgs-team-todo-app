import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { usersService } from '../services/user.service';

export class UsersController {
  async updateUserById(req: Request<{ id: string }, {}, UpdateUserDto>, res: Response) {
    const { id } = req.params;
    const updateData = req.body;

    const updatedUser = await usersService.updateUserById(id, updateData);

    res.json(updatedUser);
  }

  async removeUserById(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;

    await usersService.removeUserById(id);

    res.status(StatusCodes.NO_CONTENT).send();
  }
}

export const usersController = new UsersController();
