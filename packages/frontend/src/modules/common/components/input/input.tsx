import * as Styled from './input.styled';

type Props = {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'number';
  placeholder: string;
  disabled?: boolean;
  errors: boolean;
};

const Input = ({ name, label, type, placeholder, disabled, errors }: Props) => (
  <Styled.InputConatiner>
    <Styled.InputLabel className={errors ? 'error' : ''} htmlFor={name}>
      {label}
    </Styled.InputLabel>
    <Styled.Input
      className={errors ? 'error' : ''}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    />
    <Styled.Errors name={name} component="p" />
  </Styled.InputConatiner>
);

export default Input;
