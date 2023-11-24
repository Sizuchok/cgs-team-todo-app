import { isAxiosError } from 'axios';
import { useQuery } from 'react-query';
import { toast } from 'sonner';
import { APP_KEYS } from '../../common/consts';
import { ERROR_MESSAGES } from '../../common/consts/error-messages.const';
import { todoService } from '../../services/todo.service';

export const useGetTodoById = (id: string) =>
  useQuery({
    queryKey: APP_KEYS.QUERY_KEYS_TODO.GET_TODO_BY_ID,
    queryFn: async () => todoService.getTodoById(id),
    onError: (error) => {
      if (isAxiosError(error)) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const code = +error.response?.data.status;
        if (code) toast.error(error.response?.data.message);
        else toast.error(ERROR_MESSAGES.default);
      }
    }
  });
