import { Todo } from '../../../common/types/todo.types';
import TodoActions from '../todo-actions/todo-actions.component';
import * as Styled from './todo-card.styled';

type Props = {
  todo: Todo;
};

const TodoCard = ({ todo }: Props) => (
  <Styled.TodoCard>
    <Styled.TodoCardHeader>
      <Styled.TodoCardTitle>{todo.title}</Styled.TodoCardTitle>
      <Styled.TodoCardOwner>{todo.user.name}</Styled.TodoCardOwner>
    </Styled.TodoCardHeader>
    <Styled.TodoCardDescription>{todo.description}</Styled.TodoCardDescription>
    <Styled.TodoCardActions>
      <TodoActions todo={todo} />
    </Styled.TodoCardActions>
  </Styled.TodoCard>
);

export default TodoCard;
