import { ModalProps } from '@mui/material/Modal';
import { ReactNode } from 'react';
import * as Styled from './modal.styled';

type Props = ModalProps & {
  children: ReactNode;
};

const Modal = ({ children, ...props }: Props) => (
  <Styled.Modal
    {...props}
    slotProps={{
      backdrop: {
        sx: { backgroundColor: 'transparent', backdropFilter: 'blur(5px)' }
      }
    }}
  >
    {children}
  </Styled.Modal>
);

export default Modal;
