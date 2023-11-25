import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Todo } from '../../../common/types/todo.types';
import TodoCard from '../todo-card/todo-card.component';
import * as Styled from './todos-tablet.styled';

type Props = {
  todos: Todo[] | undefined;
};

// eslint-disable-next-line arrow-body-style
const TodosTablet = ({ todos }: Props) => {
  return (
    <Styled.TodoTabletContainer>
      <Styled.SwiperWrapper>
        <Swiper
          grabCursor
          scrollbar={{
            hide: true
          }}
          modules={[Scrollbar]}
          loop
        >
          {(todos ?? []).map((todo) => (
            <SwiperSlide key={todo.id}>
              <TodoCard todo={todo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.SwiperWrapper>
    </Styled.TodoTabletContainer>
  );
};

export default TodosTablet;
