import { ReactNode } from 'react';
import useMedia from '../../../hooks/use-media.hook';
import * as Styled from './primary-layout.styled';

type Props = {
  children: ReactNode;
};

const PrimaryLayout = ({ children }: Props) => {
  const { isMobile } = useMedia();

  return (
    <Styled.PrimaryLayout $isMobile={isMobile}>
      <Styled.Header>
        <div>My Profile</div>
      </Styled.Header>
      <Styled.Main>{children}</Styled.Main>
    </Styled.PrimaryLayout>
  );
};

export default PrimaryLayout;
