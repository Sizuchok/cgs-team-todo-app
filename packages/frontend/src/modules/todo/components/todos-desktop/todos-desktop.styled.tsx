import styled from 'styled-components';
import { SECTIONS } from '../../../theme/page-sections.const';

export const TodosDesktopContainer = styled.div`
  flex-grow: 1;
  height: calc(100% - ${SECTIONS.header});
  width: 100%;
`;

export const TodosDesktop = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
