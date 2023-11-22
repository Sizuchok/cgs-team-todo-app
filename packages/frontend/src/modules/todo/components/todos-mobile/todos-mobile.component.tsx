import { Todo } from '../../../common/types/todo.types';
import TodoCard from '../todo-card/todo-card.component';

import * as Styled from './todos-modile.styled';

type Props = {
  todos: Todo[] | undefined;
};

const TodosMobile = ({ todos }: Props) => (
  <Styled.TodosMobileContainer>
    {todos?.map((todo) => (
      <TodoCard todo={todo} key={todo.id} />
    ))}
  </Styled.TodosMobileContainer>
);

export default TodosMobile;
