import { isAxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';

import { ERROR_MESSAGES } from '../../common/consts/error-messages.const';
import { todoService } from '../../services/todo.service';
import { APP_KEYS } from '../../common/consts';

type CreateTodoServiceParams = Parameters<typeof todoService.createTodo>;

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: APP_KEYS.QUERY_KEYS_TODO.CREATE_TODO,
    mutationFn: async (...args: CreateTodoServiceParams) => todoService.createTodo(...args),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: APP_KEYS.QUERY_KEYS_TODO.GET_ALL_TODOS });
      toast.success(`New task added: ${data.title}`);
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
