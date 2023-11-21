import styled from 'styled-components';

export const SwitchesContainer = styled.div`
  & > * + * {
    margin-top: 20px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;
