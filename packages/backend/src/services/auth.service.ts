import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
import { ResetPasswordDto } from '../dto/auth/reset-password-request.dto';
import { SignInDto } from '../dto/auth/sign-in-request.dto';
import { SignInResponseDto } from '../dto/auth/sign-in-response.dto';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { User } from '../entities/user.entity';
import { HttpError } from '../exceptions/HttpError';
import { HashingService } from './hashing.service';
import { mailerService } from './mailer/mailer.service';
import { usersService } from './user.service';

export class AuthService {
  async signUp(createUserDto: CreateUserDto) {
    const user = await usersService.createUser(createUserDto);

    try {
      await mailerService.sendActivationEmail(user);
    } catch (error) {
      throw new HttpError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to send activation email');
    }
  }

  async signIn({ email, password }: SignInDto): Promise<SignInResponseDto> {
    const user = await usersService.findUserByEmail(email);

    if (!user) throw new HttpError(StatusCodes.UNAUTHORIZED, 'User with this email does not exist');

    const isEqual = await HashingService.compare(password, user.password);

    if (!isEqual) {
      throw new HttpError(StatusCodes.UNAUTHORIZED, 'Invalid email or password');
    }

    const payload = { sub: user.id, email: user.email };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });

    return { user, accessToken };
  }

  async activateUser(token: string): Promise<SignInResponseDto> {
    const user = await usersService.activateUser(token);

    const payload = { sub: user.id, email: user.email };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });

    return { user, accessToken };
  }

  async forgotPassword(email: string): Promise<void> {
    const user = await usersService.findUserByEmail(email);

    if (!user) throw new HttpError(StatusCodes.BAD_REQUEST, 'User with this email does not exist');

    if (!user.isActivated) {
      throw new HttpError(StatusCodes.BAD_REQUEST, 'You must first activate your account');
    }

    user.token = v4();

    await User.save(user);

    try {
      await mailerService.sendResetPasswordEmail(user);
    } catch (error) {
      throw new HttpError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to send reset password email');
    }
  }

  async resetPassword({ token, newPassword }: ResetPasswordDto): Promise<void> {
    const user = await User.findOneBy({ token });

    if (!user) {
      throw new HttpError(StatusCodes.BAD_REQUEST, 'Password reset failed. Invalid reset link');
    }

    const hashedPassword = await HashingService.hash(newPassword);

    user.password = hashedPassword;
    user.token = null;

    await User.save(user);
  }
}

export const authService = new AuthService();
