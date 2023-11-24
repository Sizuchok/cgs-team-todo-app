import { useState } from 'react';
import * as Styled from './toggle-button.styled';

type Props = {
  title: string;
  onClick: () => void;
};

const ToggleButton = ({ title, onClick }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <Styled.ToggleButton $active={isActive} onClick={handleClick}>
      {title}
    </Styled.ToggleButton>
  );
};
export default ToggleButton;
