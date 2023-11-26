import RowContainer from '../../../common/components/table/rows/row-container/row-container.component';
import TodoRow from '../../../common/components/table/rows/todo-row/todo-row.component';
import TableContainer from '../../../common/components/table/table-container/table-container.component';
import { Todo } from '../../../common/types/todo.types';
import TodoActions from '../todo-actions/todo-actions.component';
import * as Styled from './todos-desktop.styled';

type Props = {
  todos: Todo[] | undefined;
};

const TodosDesktop = ({ todos }: Props) => {
  const gridTemplateColumns = '0.25fr 0.5fr 0.2fr';

  return (
    <Styled.TodosDesktopContainer>
      <Styled.TodosDesktop>
        <TableContainer
          columns={['Title', 'Description', 'Actions']}
          gridTemplateColumns={gridTemplateColumns}
        >
          {(todos ?? []).map((todo) => (
            <RowContainer key={todo.id} gridTemplateColumns={gridTemplateColumns}>
              <TodoRow todo={todo} />
              <TodoActions todo={todo} />
            </RowContainer>
          ))}
        </TableContainer>
      </Styled.TodosDesktop>
    </Styled.TodosDesktopContainer>
  );
};

export default TodosDesktop;
