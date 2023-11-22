import { ReactNode } from 'react';
import * as Styled from './todo-modal-layout.styled';

type Props = {
  children: ReactNode;
};

const TodoModalLayout = ({ children }: Props) => (
  <Styled.Container>
    <Styled.Form>{children}</Styled.Form>
  </Styled.Container>
);

export default TodoModalLayout;
