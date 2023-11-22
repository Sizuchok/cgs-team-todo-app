import { useMediaQuery } from 'react-responsive';

const useMedia = () => {
  const isDesktop = useMediaQuery({
    minWidth: 1280
  });

  const isTablet = useMediaQuery({ maxWidth: 1279, minWidth: 429 });

  const isMobile = useMediaQuery({ maxWidth: 428 });

  return { isDesktop, isTablet, isMobile };
};

export default useMedia;
