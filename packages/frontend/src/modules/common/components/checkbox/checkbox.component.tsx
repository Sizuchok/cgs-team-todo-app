import * as Styled from './checkbox.styled';

type Props = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
};

// eslint-disable-next-line arrow-body-style
const Checkbox = ({ label, checked, disabled, onChange }: Props) => {
  return (
    <Styled.CheckboxContainer>
      <Styled.CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <Styled.CheckboxLabel>{label}</Styled.CheckboxLabel>
    </Styled.CheckboxContainer>
  );
};

export default Checkbox;
