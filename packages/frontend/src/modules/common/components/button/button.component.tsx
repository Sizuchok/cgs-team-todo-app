import { ReactNode } from 'react';
import * as Styled from './button.styled';

type Props = {
  disabled?: boolean;
} & (
  | {
      type: 'link';
      children: ReactNode;
      title?: never;
      isLoading?: never;
      onClick?: never;
    }
  | {
      type: 'button';
      title: string;
      isLoading?: boolean;
      children?: never;
      onClick?: () => void;
    }
);

// eslint-disable-next-line arrow-body-style
const Button = ({ type, children, disabled, isLoading, title, onClick }: Props) => {
  return type === 'button' ? (
    <Styled.Button onClick={onClick} disabled={disabled}>
      {isLoading ? 'loading...' : title}
    </Styled.Button>
  ) : (
    <Styled.Button as="div" disabled={disabled}>
      {children}
    </Styled.Button>
  );
};

export default Button;
