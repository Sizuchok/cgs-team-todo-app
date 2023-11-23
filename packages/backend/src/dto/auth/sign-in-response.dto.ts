import { UserDto } from '../user/user.dto';

export type SignInResponseDto = {
  user: UserDto;
  accessToken: string;
};
