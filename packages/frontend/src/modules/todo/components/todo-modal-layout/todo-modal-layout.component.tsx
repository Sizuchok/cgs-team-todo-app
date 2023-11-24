import { ReactNode } from 'react';
import { FormContainer } from '../../../common/components/containers/form-container/form-container.styled';
import { ModalContainer } from '../../../common/components/containers/modal-container/modal-container.styled';

type Props = {
  children: ReactNode;
};

const TodoModalLayout = ({ children }: Props) => (
  <ModalContainer>
    <FormContainer>{children}</FormContainer>
  </ModalContainer>
);

export default TodoModalLayout;
