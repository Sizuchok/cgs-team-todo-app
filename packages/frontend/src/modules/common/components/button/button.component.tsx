import { CircularProgress } from '@mui/material';
import { ReactNode } from 'react';
import * as Styled from './button.styled';

type LinkProps = {
  type: 'link';
  children: ReactNode;
  title?: never;
  isLoading?: never;
  onClick?: never;
};

type ButtonProps = {
  type: 'button';
  title: string;
  isLoading?: boolean;
  children?: never;
  onClick?: () => void;
};

type Props = {
  disabled?: boolean;
  stretch?: boolean;
  secondary?: boolean;
} & (ButtonProps | LinkProps);

const Button = ({
  type,
  children,
  disabled,
  isLoading,
  title,
  onClick,
  stretch,
  secondary
}: // eslint-disable-next-line arrow-body-style
Props) => {
  return type === 'button' ? (
    <Styled.Button
      className={secondary ? 'secondary' : ''}
      onClick={onClick}
      disabled={disabled}
      $stretch={stretch}
      type="submit"
    >
      {isLoading ? <CircularProgress color="inherit" size="1.5rem" /> : title}
    </Styled.Button>
  ) : (
    <Styled.Button
      className={secondary ? 'secondary' : ''}
      as="div"
      disabled={disabled}
      $stretch={stretch}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
