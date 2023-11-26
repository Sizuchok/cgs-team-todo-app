import { isAxiosError } from 'axios';
import { useInfiniteQuery } from 'react-query';
import { toast } from 'sonner';
import { APP_KEYS } from '../../common/consts';
import { ERROR_MESSAGES } from '../../common/consts/error-messages.const';
import { GetAllTodosFilters } from '../../common/types/todo.types';
import { todoService } from '../../services/todo.service';

export const useGetInfiniteTodos = (data: GetAllTodosFilters) =>
  useInfiniteQuery({
    queryKey: [APP_KEYS.QUERY_KEYS_TODO.GET_IFINITE_TODOS],
    queryFn: async ({ pageParam = 0 }) => todoService.getAllTodos({ ...data, offset: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const itemsPerPage = data.limit ?? 5;
      const allPagesCount = allPages.length;

      const newOffset = (allPagesCount * itemsPerPage) % lastPage.count;

      return newOffset < itemsPerPage ? undefined : newOffset;
    },
    keepPreviousData: true,
    onError: (error) => {
      if (isAxiosError(error)) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const code = +error.response?.data.status;
        if (code) toast.error(error.response?.data.message);
        else toast.error(ERROR_MESSAGES.default);
      }
    }
  });
