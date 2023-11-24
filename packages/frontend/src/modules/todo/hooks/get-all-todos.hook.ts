import { useQuery } from 'react-query';
import { APP_KEYS } from '../../common/consts';
import { todoService } from '../../services/todo.service';

export const useGetAllTodos = () =>
  useQuery({
    queryKey: `${APP_KEYS.QUERY_KEYS_TODO.GET_ALL_TODOS}`,
    queryFn: async () => todoService.getAllTodos()
  });
