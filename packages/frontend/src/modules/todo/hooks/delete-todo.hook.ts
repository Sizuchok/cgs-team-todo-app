import { isAxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { APP_KEYS } from '../../common/consts';
import { ERROR_MESSAGES } from '../../common/consts/error-messages.const';
import { todoService } from '../../services/todo.service';

export const useDeleteTodo = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: APP_KEYS.QUERY_KEYS_TODO.DELETE_TODO,
    mutationFn: async () => todoService.deleteTodoById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: APP_KEYS.QUERY_KEYS_TODO.GET_ALL_TODOS });
      toast.success('Todo deleted successfully');
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
