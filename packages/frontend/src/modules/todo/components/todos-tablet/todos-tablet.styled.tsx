import styled from 'styled-components';
import { rem } from '../../../theme/rem.util';

export const TodoTabletContainer = styled.div`
  flex-grow: 1;
`;

export const SwiperWrapper = styled('div')`
  margin: 0 auto;
  max-width: ${rem(500)};
  margin-top: ${rem(100)};

  .swiper {
    left: 0;
  }
`;
