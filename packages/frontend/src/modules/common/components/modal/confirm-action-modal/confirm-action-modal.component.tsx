import Button from '../../button/button.component';
import * as Styled from './confirm-action-modal.styled';

type Props = {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmActionModal = ({ title, onConfirm, onCancel }: Props) => (
  <Styled.Container>
    <Styled.Title>{title}</Styled.Title>
    <Styled.Buttons>
      <Button title="Back" type="button" onClick={onCancel} />
      <Button title="Confirm" type="button" onClick={onConfirm} />
    </Styled.Buttons>
  </Styled.Container>
);

export default ConfirmActionModal;
