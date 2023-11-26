import { ModalProps } from '@mui/material/Modal';
import { ReactNode, Ref, forwardRef } from 'react';
import * as Styled from './modal.styled';

type Props = ModalProps & {
  children: ReactNode;
};

const Modal = forwardRef(({ children, ...props }: Props, ref: Ref<HTMLDivElement>) => (
  <Styled.Modal
    {...props}
    slotProps={{
      backdrop: {
        sx: { backgroundColor: 'transparent', backdropFilter: 'blur(5px)' }
      }
    }}
  >
    <div ref={ref}>{children}</div>
  </Styled.Modal>
));

export default Modal;
