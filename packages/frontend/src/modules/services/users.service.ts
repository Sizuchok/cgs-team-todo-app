import { APP_KEYS } from '../common/consts';
import { UpdateUser, UpdateUserService, User } from '../common/types/user.types';
import { HttpService } from './http.service';

export class UsersService extends HttpService {
  public async deleteUserById(id: string) {
    await this.delete<void>({
      url: `${id}`
    });
  }

  public async updateUserById({ id, data }: UpdateUserService) {
    const response = await this.patch<User, UpdateUser>({
      url: `${id}`,
      data
    });

    return response.data;
  }
}

export const usersService = new UsersService(
  APP_KEYS.BACKEND_KEYS.BACK,
  APP_KEYS.BACKEND_KEYS.USERS
);
