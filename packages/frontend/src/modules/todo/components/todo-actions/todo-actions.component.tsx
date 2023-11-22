import { useState } from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { RiEditCircleFill } from 'react-icons/ri';
import ConfirmActionModal from '../../../common/components/modal/confirm-action-modal/confirm-action-modal.component';
import Modal from '../../../common/components/modal/modal-container/modal.component';
import { Switch } from '../../../common/components/switch/switch.component';
import { Todo } from '../../../common/types/todo.types';
import { useDeleteTodo } from '../../hooks/delete-todo.hook';
import { useUpdateTodo } from '../../hooks/update-todo.hook';
import UpdateTodoForm from '../forms/update-todo-from.component';
import TodoModalLayout from '../todo-modal-layout/todo-modal-layout.component';
import * as Styled from './todo-actions.styled';

type Props = {
  todo: Todo;
};

const TodoActions = ({ todo }: Props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateTodoModal, setOpenUpdateTodoModal] = useState<boolean>(false);

  const handleOpenUpdateModal = () => setOpenUpdateTodoModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateTodoModal(false);

  const { mutate: deleteTodo } = useDeleteTodo(todo.id);

  const { mutate: patchTodo } = useUpdateTodo(todo.id, true);

  return (
    <Styled.Actions>
      <Styled.Action onClick={handleOpenUpdateModal}>
        <Styled.Icon as={RiEditCircleFill} $hoverFill="default" />
      </Styled.Action>
      <Styled.Action onClick={() => setOpenDeleteModal(true)}>
        <Styled.Icon as={IoTrashBin} $hoverFill="danger" />
      </Styled.Action>
      <Styled.Action>
        <Switch
          checked={todo.isChecked}
          onChange={() => patchTodo({ isChecked: !todo.isChecked })}
        />
      </Styled.Action>
      <Modal open={openUpdateTodoModal} onClose={handleCloseUpdateModal}>
        <TodoModalLayout>
          <UpdateTodoForm todo={todo} handleClose={handleCloseUpdateModal} />
        </TodoModalLayout>
      </Modal>
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <ConfirmActionModal
          title="Are you sure?"
          onConfirm={() => deleteTodo()}
          onCancel={() => setOpenDeleteModal(false)}
        />
      </Modal>
    </Styled.Actions>
  );
};
export default TodoActions;
