import { useState } from 'react';
import Button from '../common/components/button/button.component';
import Filters from '../common/components/filters/todo-filters.component';
import PrimaryLayout from '../common/components/layouts/primary-layout/primary-layout.component';
import Modal from '../common/components/modal/modal.component';
import SearchBar from '../common/components/search-bar/search-bar.component';
import useMedia from '../common/hooks/use-media.hook';
import CreateTodoForm from './components/forms/create-todo-form.component';
import TodoModalLayout from './components/todo-modal-layout/todo-modal-layout.component';
import TodosDesktop from './components/todos-desktop/todos-desktop.component';
import TodosMobile from './components/todos-mobile/todos-mobile.component';
import TodosTablet from './components/todos-tablet/todos-tablet.component';
import { useGetAllTodos } from './hooks/get-all-todos.hook';
import * as StyledCommon from './todos-page.styled';

const TodosPage = () => {
  const [openCreateTodoModal, setOpenCreateTodoModal] = useState<boolean>(false);

  const handleOpenCreateModal = () => setOpenCreateTodoModal(true);
  const handleCloseCreateModal = () => setOpenCreateTodoModal(false);

  const { isDesktop, isMobile, isTablet } = useMedia();

  const { data: todos } = useGetAllTodos();

  return (
    <PrimaryLayout>
      <StyledCommon.FiltersContainer>
        <Filters />
        <Button onClick={handleOpenCreateModal} type="button" title="New todo" />
        <SearchBar query="" onChange={() => {}} />
      </StyledCommon.FiltersContainer>

      {isDesktop && <TodosDesktop todos={todos} />}
      {isTablet && <TodosTablet todos={todos} />}
      {isMobile && <TodosMobile todos={todos} />}

      <Modal open={openCreateTodoModal} onClose={handleCloseCreateModal}>
        <TodoModalLayout>
          <CreateTodoForm handleClose={handleCloseCreateModal} />
        </TodoModalLayout>
      </Modal>
    </PrimaryLayout>
  );
};
export default TodosPage;
