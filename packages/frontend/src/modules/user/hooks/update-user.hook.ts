import { isAxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { APP_KEYS } from '../../common/consts';
import { ERROR_MESSAGES } from '../../common/consts/error-messages.const';
import { UpdateUserService } from '../../common/types/user.types';
import { usersService } from '../../services/users.service';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS_USER.UPDATE],
    mutationFn: async ({ id, data }: UpdateUserService) =>
      usersService.updateUserById({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: APP_KEYS.QUERY_KEYS_AUTH.GET_ME });
      toast.success('Profile updated successfully');
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
};
