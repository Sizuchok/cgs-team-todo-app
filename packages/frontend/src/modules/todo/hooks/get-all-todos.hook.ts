import { isAxiosError } from 'axios';
import { useQuery } from 'react-query';
import { toast } from 'sonner';
import { APP_KEYS } from '../../common/consts';
import { ERROR_MESSAGES } from '../../common/consts/error-messages.const';
import { GetAllTodosFilters } from '../../common/types/todo.types';
import { todoService } from '../../services/todo.service';

export const useGetAllTodos = (data: GetAllTodosFilters) =>
  useQuery({
    queryKey: [`${APP_KEYS.QUERY_KEYS_TODO.GET_ALL_TODOS}`, data],
    queryFn: async () => todoService.getAllTodos(data),
    onError: (error) => {
      if (isAxiosError(error)) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const code = +error.response?.data.status;
        if (code) toast.error(error.response?.data.message);
        else toast.error(ERROR_MESSAGES.default);
      }
    }
  });
