import styled from 'styled-components';

export const LoadingOverlayContainer = styled.div<{ $vh?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ $vh }) => ($vh ? '100vh' : '100%')};
`;
