import styled from 'styled-components';
import { COLORS, FONTS } from '../../../../theme';
import { SECTIONS } from '../../../../theme/page-sections.const';
import { rem } from '../../../../theme/rem.util';
import { WIDTHS } from '../../../../theme/widths.const';

export const PrimaryLayout = styled.div<{ $isMobile: boolean }>`
  background: ${COLORS.background};
  font-family: ${FONTS.FAMILIES.primary};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${`${SECTIONS.header} calc(100vh - ${SECTIONS.header})`};
`;

export const Header = styled.header`
  min-height: ${rem(70)};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLORS.border};
  padding: 0 ${rem(40)};

  & :last-child {
    margin-left: auto;
  }
`;

export const Main = styled.main`
  padding: ${rem(40)} ${rem(40)} ${rem(30)} ${rem(40)};
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: ${WIDTHS.maxMain};
  margin: 0 auto;
`;
