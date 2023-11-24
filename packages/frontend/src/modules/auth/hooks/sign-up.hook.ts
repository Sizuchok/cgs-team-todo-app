import { isAxiosError } from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'sonner';
import { APP_KEYS } from '../../common/consts';
import { ERROR_MESSAGES } from '../../common/consts/error-messages.const';
import { authService } from '../../services/auth.service';

type ServiceParams = Parameters<typeof authService.signUp>;

export const useSignUp = () =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS_AUTH.SIGN_UP],
    mutationFn: async (...args: ServiceParams) => authService.signUp(...args),
    onSuccess: () => {
      toast.success('Sign up successful!');
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const code = +error.response?.data.status;
        if (code) toast.error(error.response?.data.message);
        else toast.error(ERROR_MESSAGES.default);
      }
    }
  });
