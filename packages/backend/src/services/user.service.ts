import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { v4 } from 'uuid';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { UserDto } from '../dto/user/user.dto';
import { User } from '../entities/user.entity';
import { HttpError } from '../exceptions/HttpError';
import { HashingService } from './hashing.service';

class UserService {
  async createUser({ password, email, name }: CreateUserDto): Promise<UserDto> {
    const user = await this.findUserByEmail(email);

    if (user) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        'This email is already associated with an account.'
      );
    }

    const hashedPassword = await HashingService.hash(password);

    const newUser = User.create({ name, email, password: hashedPassword, token: v4() });

    return User.save(newUser);
  }

  async activateUser(token: string) {
    const user = await User.findOneBy({ token });

    if (!user) throw new HttpError(StatusCodes.BAD_REQUEST, 'Activation failed. User not found');

    user.isActivated = true;
    user.token = null;

    return User.save(user);
  }

  async findUserById(id: string): Promise<UserDto> {
    const user = await User.findOneBy({ id });

    if (!user) {
      throw new HttpError(StatusCodes.NOT_FOUND, 'User not found');
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return User.findOneBy({ email });
  }

  async updateUserById(id: string, updateData: UpdateUserDto): Promise<UserDto> {
    const user = await User.findOneBy({ id });

    if (!user) {
      throw new HttpError(StatusCodes.BAD_REQUEST, 'User not found for update');
    }

    const updatedUserDto = { ...updateData };

    if (updatedUserDto.password) {
      const hashedPassword = await HashingService.hash(updatedUserDto.password);
      updatedUserDto.password = hashedPassword;
    }

    const result = await User.update(id, updatedUserDto);

    if (!result.affected) {
      throw new HttpError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'User was not updated for some reason'
      );
    }

    const updatedUser = await User.findOneBy({ id });

    if (!updatedUser) {
      throw new HttpError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error retrieving user after update');
    }

    return updatedUser;
  }

  async removeUserById(id: string): Promise<void> {
    const user = await User.findOneBy({ id });

    if (!user) {
      throw new HttpError(StatusCodes.BAD_REQUEST, 'User not found for deletion');
    }

    const result = await User.delete(id);

    if (!result.affected) {
      throw new HttpError(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  }
}

export const usersService = new UserService();
