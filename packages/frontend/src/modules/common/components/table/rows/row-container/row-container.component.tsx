import { ReactNode } from 'react';
import * as Styled from './row-container.styled';

type Props = {
  children: ReactNode;
  gridTemplateColumns: string;
  darker?: boolean;
};

const RowContainer = ({ gridTemplateColumns, darker, children }: Props) => (
  <Styled.Row $darker={darker} $gridTemplateColumns={gridTemplateColumns}>
    {children}
  </Styled.Row>
);

export default RowContainer;
