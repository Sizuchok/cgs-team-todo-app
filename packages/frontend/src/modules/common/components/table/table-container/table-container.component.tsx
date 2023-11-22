import { ReactNode } from 'react';
import * as Styled from './table-container.styled';

type TableContainerProps = {
  columns: string[];
  gridTemplateColumns: string;
  children: ReactNode;
};

const TableContainer = ({ columns, gridTemplateColumns, children }: TableContainerProps) => (
  <>
    <Styled.TableHeader $gridTemplateColumns={gridTemplateColumns}>
      {columns.map((col) => (
        <div key={col}>{col}</div>
      ))}
    </Styled.TableHeader>
    <Styled.Table>
      <Styled.TableBody>{children}</Styled.TableBody>
    </Styled.Table>
  </>
);

export default TableContainer;
