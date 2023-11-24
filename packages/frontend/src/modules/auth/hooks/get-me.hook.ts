import { isAxiosError } from 'axios';
import { useQuery } from 'react-query';
import { toast } from 'sonner';
import { APP_KEYS } from '../../common/consts';
import { ERROR_MESSAGES } from '../../common/consts/error-messages.const';
import { authService } from '../../services/auth.service';

export const useGetMe = () =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS_AUTH.GET_ME],
    queryFn: async () => authService.getMe(),
    onError: (error) => {
      localStorage.removeItem(APP_KEYS.STORAGE_KEYS.JWT_TOKEN);
      if (isAxiosError(error)) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const code = +error.response?.data.status;
        if (code) toast.error(error.response?.data.message);
        else toast.error(ERROR_MESSAGES.default);
      }
    },
    refetchInterval: 0
  });
