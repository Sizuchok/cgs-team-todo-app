import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Button from '../common/components/button/button.component';
import Filters from '../common/components/filters/todo-filters.component';
import PrimaryLayout from '../common/components/layouts/primary-layout/primary-layout.component';
import LoadingOverlay from '../common/components/loading-overlay/loading-overlay.component';
import Modal from '../common/components/modal/modal-container/modal.component';
import Pagination from '../common/components/pagination/pagination.component';
import SearchBar from '../common/components/search-bar/search-bar.component';
import ToggleButton from '../common/components/toggle-button/toggle-button.component';
import useMedia from '../common/hooks/use-media.hook';
import { GetAllTodosFilters } from '../common/types/todo.types';
import CreateTodoForm from './components/forms/create-todo-form.component';
import TodoModalLayout from './components/todo-modal-layout/todo-modal-layout.component';
import TodosDesktop from './components/todos-desktop/todos-desktop.component';
import TodosMobile from './components/todos-mobile/todos-mobile.component';
import TodosTablet from './components/todos-tablet/todos-tablet.component';
import { useGetAllTodos } from './hooks/get-all-todos.hook';
import * as StyledCommon from './todos-page.styled';

const TodosPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 500);

  const [openCreateTodoModal, setOpenCreateTodoModal] = useState<boolean>(false);

  const [queryParams, setQueryParams] = useState<GetAllTodosFilters>({});

  const { data, isFetching } = useGetAllTodos(queryParams);

  const handleQueryChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
  };

  const handleSetPrivate = () => {
    setQueryParams({
      ...queryParams,
      isPrivate: !queryParams.isPrivate
    });
  };

  const handleSetPublic = () => {
    setQueryParams({
      ...queryParams,
      isPublic: !queryParams.isPublic
    });
  };

  const handleSetChecked = () => {
    setQueryParams({
      ...queryParams,
      isChecked: !queryParams.isChecked
    });
  };

  const handleSetAll = () => {
    setQueryParams({});
  };

  const handleOpenCreateModal = () => setOpenCreateTodoModal(true);
  const handleCloseCreateModal = () => setOpenCreateTodoModal(false);

  const { isDesktop, isMobile, isTablet } = useMedia();

  useEffect(() => {
    setQueryParams({
      ...queryParams,
      query: debouncedQuery === '' ? undefined : debouncedQuery
    });
  }, [debouncedQuery]);

  return (
    <PrimaryLayout>
      <StyledCommon.FiltersContainer>
        <Filters>
          <ToggleButton title="All" onClick={handleSetAll} />
          <ToggleButton title="Public" onClick={handleSetPublic} />
          <ToggleButton title="Private" onClick={handleSetPrivate} />
          <ToggleButton title="Completed" onClick={handleSetChecked} />
        </Filters>

        <Button secondary onClick={handleOpenCreateModal} type="button" title="New todo" />
        <SearchBar query={query} onChange={handleQueryChange} />
      </StyledCommon.FiltersContainer>

      {isFetching ? (
        <LoadingOverlay />
      ) : (
        <>
          {isDesktop && <TodosDesktop todos={data?.todos} />}
          {isTablet && <TodosTablet todos={data?.todos} />}
          {isMobile && <TodosMobile todos={data?.todos} />}

          {!isTablet && (
            <Pagination
              forcePage={currentPage}
              pageCount={Math.ceil((data?.count ?? itemsPerPage) / itemsPerPage) || 1}
              onPageChange={({ selected }) => {
                const newOffset = (selected * itemsPerPage) % data!.count || 1;
                setQueryParams({
                  ...queryParams,
                  limit: itemsPerPage,
                  offset: newOffset
                });
                setCurrentPage(selected);
              }}
            />
          )}
        </>
      )}

      <Modal open={openCreateTodoModal} onClose={handleCloseCreateModal}>
        <TodoModalLayout>
          <CreateTodoForm handleClose={handleCloseCreateModal} />
        </TodoModalLayout>
      </Modal>
    </PrimaryLayout>
  );
};
export default TodosPage;
