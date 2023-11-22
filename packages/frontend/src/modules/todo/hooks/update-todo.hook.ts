import { isAxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { APP_KEYS } from '../../common/consts';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { ERROR_MESSAGES } from '../../common/consts/error-messages.const';
import { Todo } from '../../common/types/todo.types';
import { todoService } from '../../services/todo.service';

type CreateTodoServiceParams = Parameters<typeof todoService.updateTodoById>;

export const useUpdateTodo = (id: string, onlyIsChecked?: boolean) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: APP_KEYS.QUERY_KEYS.UPDATE_TODO,
    mutationFn: async (data: CreateTodoServiceParams['1']) => todoService.updateTodoById(id, data),
    onSuccess: (updatedTodo) => {
      const previousData = queryClient.getQueryData<Todo[]>(QUERY_KEYS.GET_ALL_TODOS);

      queryClient.setQueryData(
        [QUERY_KEYS.GET_ALL_TODOS],
        previousData?.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      );

      toast.success(
        onlyIsChecked
          ? `"${updatedTodo.title}" marked as ${updatedTodo.isChecked ? 'done' : 'undone'}`
          : `Updated todo: ${updatedTodo.title}`
      );
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const code = +error.response?.data.status;
        if (code) toast.error(error.response?.data.message);
        toast.error(ERROR_MESSAGES.default);
      }
    }
  });
};
