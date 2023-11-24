import { CircularProgress, CircularProgressProps } from '@mui/material';
import * as Styled from './loading-overplay.styled';

type Props = CircularProgressProps & {
  containerClassName?: string;
  vh?: boolean;
};

const LoadingOverlay = ({ vh, containerClassName, ...props }: Props) => (
  <Styled.LoadingOverlayContainer className={containerClassName} $vh={vh}>
    <CircularProgress color="inherit" size="4rem" {...props} />
  </Styled.LoadingOverlayContainer>
);

export default LoadingOverlay;
