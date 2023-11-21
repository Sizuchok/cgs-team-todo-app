import MUIModal, { ModalProps } from '@mui/material/Modal';
import { ReactNode } from 'react';

type Props = ModalProps & {
  children: ReactNode;
};

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const Modal = ({ children, ...props }: Props) => (
  <MUIModal
    {...props}
    sx={style}
    slotProps={{
      backdrop: {
        sx: { backgroundColor: 'transparent', backdropFilter: 'blur(5px)' }
      }
    }}
  >
    {children}
  </MUIModal>
);

export default Modal;
