import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GetAllTodosFilters } from '../../../common/types/todo.types';
import { useGetInfiniteTodos } from '../../hooks/get-infinnite-todos.hooks';
import TodoCard from '../todo-card/todo-card.component';
import * as Styled from './todos-tablet.styled';

type Props = {
  queryParams: GetAllTodosFilters;
};

const TodosTablet = ({ queryParams }: Props) => {
  const { data, hasNextPage, fetchNextPage, refetch } = useGetInfiniteTodos(queryParams);

  useEffect(() => {
    refetch();
  }, [queryParams]);

  return (
    <Styled.TodoTabletContainer>
      <Styled.SwiperWrapper>
        <Swiper
          grabCursor
          scrollbar={{
            hide: true
          }}
          modules={[Scrollbar]}
          onReachEnd={() => {
            if (hasNextPage) fetchNextPage();
          }}
        >
          {data?.pages.map((page) =>
            page.todos.map((todo) => (
              <SwiperSlide key={todo.id}>
                <TodoCard todo={todo} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </Styled.SwiperWrapper>
    </Styled.TodoTabletContainer>
  );
};

export default TodosTablet;
