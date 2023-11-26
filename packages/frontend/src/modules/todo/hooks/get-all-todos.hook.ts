import { useQuery } from 'react-query';
import { toast } from 'sonner';
import { APP_KEYS } from '../../common/consts';
import { GetAllTodosFilters } from '../../common/types/todo.types';
import { todoService } from '../../services/todo.service';

export const useGetAllTodos = (data: GetAllTodosFilters) =>
  useQuery({
    queryKey: [`${APP_KEYS.QUERY_KEYS_TODO.GET_ALL_TODOS}`, data],
    queryFn: async () => todoService.getAllTodos(data),
    onSuccess: () => {
      toast.success('Query!');
    }
  });
