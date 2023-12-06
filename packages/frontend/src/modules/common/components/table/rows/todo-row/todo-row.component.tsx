import { Todo } from '../../../../types/todo.types';

type Props = {
  todo: Todo;
};

const TodoRow = ({ todo }: Props) => (
  <>
    <div>{todo.user.name}</div>
    <div>{todo.title}</div>
    <div>{todo.description}</div>
  </>
);

export default TodoRow;
