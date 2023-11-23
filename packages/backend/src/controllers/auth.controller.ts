import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ResetPasswordDto } from '../dto/auth/reset-password-request.dto';
import { SignInDto } from '../dto/auth/sign-in-request.dto';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { authService } from '../services/auth.service';

export class AuthController {
  async signUp(req: Request<{}, {}, CreateUserDto>, res: Response) {
    await authService.signUp(req.body);
    res.status(StatusCodes.CREATED).send();
  }

  async activateUser(req: Request<{}, {}, { token: string }>, res: Response) {
    const { token } = req.body;
    const signedInData = await authService.activateUser(token);
    res.json(signedInData);
  }

  async signIn(req: Request<{}, {}, SignInDto>, res: Response) {
    const signedInData = await authService.signIn(req.body);
    res.json(signedInData);
  }

  async forgotPassword(req: Request<{}, {}, { email: string }>, res: Response) {
    await authService.forgotPassword(req.body.email);
    res.send();
  }

  async resetPassword(req: Request<{}, {}, ResetPasswordDto>, res: Response) {
    await authService.resetPassword(req.body);
    res.send();
  }
}

export const authController = new AuthController();
