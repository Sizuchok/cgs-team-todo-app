import { APP_KEYS } from '../common/consts';
import {
  ActivateUser,
  ForgotPassword,
  ResetPassword,
  SignIn,
  SignInResponse,
  SignUp
} from '../common/types/auth.types';
import { User } from '../common/types/user.types';
import { HttpService } from './http.service';

export class AuthService extends HttpService {
  public async signUp(data: SignUp) {
    await this.post<void, SignUp>({
      url: `${APP_KEYS.BACKEND_KEYS.R_SIGN_UP}`,
      data
    });
  }

  public async activate(data: ActivateUser) {
    const response = await this.post<SignInResponse, ActivateUser>({
      url: `${APP_KEYS.BACKEND_KEYS.R_ACTIVATE}`,
      data
    });

    return response.data;
  }

  public async signIn(data: SignIn) {
    const response = await this.post<SignInResponse, SignIn>({
      url: `${APP_KEYS.BACKEND_KEYS.R_SIGN_IN}`,
      data
    });

    return response.data;
  }

  async getMe() {
    const response = await this.get<User, void>({
      url: `${APP_KEYS.BACKEND_KEYS.R_GET_ME}`
    });

    return response.data;
  }

  public async forgotPassword(data: ForgotPassword) {
    await this.post<void, ForgotPassword>({
      url: `${APP_KEYS.BACKEND_KEYS.R_FORGOT_PASSWORD}`,
      data
    });
  }

  public async resetPassword(data: ResetPassword) {
    await this.post<void, ResetPassword>({
      url: `${APP_KEYS.BACKEND_KEYS.R_RESET_PASSWORD}`,
      data
    });
  }
}

export const authService = new AuthService(APP_KEYS.BACKEND_KEYS.BACK, APP_KEYS.BACKEND_KEYS.AUTH);
