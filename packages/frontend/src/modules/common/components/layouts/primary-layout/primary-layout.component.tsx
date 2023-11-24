import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { APP_KEYS } from '../../../consts';
import useMedia from '../../../hooks/use-media.hook';
import Button from '../../button/button.component';
import * as Styled from './primary-layout.styled';

type Props = {
  children: ReactNode;
};

const PrimaryLayout = ({ children }: Props) => {
  const { isMobile } = useMedia();

  return (
    <Styled.PrimaryLayout $isMobile={isMobile}>
      <Styled.Header>
        <Button secondary type="link">
          <Link to={`/${APP_KEYS.ROUTER_KEYS.ME}`}>My Profile</Link>
        </Button>
      </Styled.Header>
      <Styled.Main>{children}</Styled.Main>
    </Styled.PrimaryLayout>
  );
};

export default PrimaryLayout;
