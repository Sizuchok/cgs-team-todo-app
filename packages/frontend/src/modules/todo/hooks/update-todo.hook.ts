import { isAxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { APP_KEYS } from '../../common/consts';
import { ERROR_MESSAGES } from '../../common/consts/error-messages.const';
import { GetAllTodosResponse } from '../../common/types/todo.types';
import { todoService } from '../../services/todo.service';

type CreateTodoServiceParams = Parameters<typeof todoService.updateTodoById>;

export const useUpdateTodo = (id: string, onlyIsChecked?: boolean) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: APP_KEYS.QUERY_KEYS_TODO.UPDATE_TODO,
    mutationFn: async (data: CreateTodoServiceParams['1']) => todoService.updateTodoById(id, data),
    onSuccess: (updatedTodo) => {
      queryClient.setQueriesData(
        [APP_KEYS.QUERY_KEYS_TODO.GET_ALL_TODOS],
        // eslint-disable-next-line arrow-body-style
        (oldTodos: GetAllTodosResponse | undefined) => {
          return {
            // TODO: fix no null assertion
            count: oldTodos!.count,
            // eslint-disable-next-line no-confusing-arrow
            todos: oldTodos!.todos.map((todo) =>
              todo.id === updatedTodo.id ? Object.assign(todo, updatedTodo) : todo
            )
          };
        }
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
        else toast.error(ERROR_MESSAGES.default);
      }
    }
  });
};
