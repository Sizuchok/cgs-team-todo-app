import { ReactNode } from 'react';
import * as Styled from './todo-filters.styled';

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line arrow-body-style
const Filters = ({ children }: Props) => {
  return <Styled.FiltersContainer>{children}</Styled.FiltersContainer>;
};
export default Filters;
