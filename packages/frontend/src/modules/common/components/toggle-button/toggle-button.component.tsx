import { useContext, useEffect } from 'react';
import { TogglerContext } from '../toggler/toggler.component';
import * as Styled from './toggle-button.styled';

type Props = {
  title: string;
  onClick: () => void;
  resets?: boolean;
};

const ToggleButton = ({ title, onClick, resets }: Props) => {
  const { filters, setFilters, resetFilter, setResetFilter } = useContext(TogglerContext);

  const handleClick = () => {
    if (resets) {
      setFilters({
        [title]: !filters[title]
      });
    } else {
      const updatedFilters = {
        ...filters,
        [title]: !filters[title]
      };

      delete updatedFilters[resetFilter];

      setFilters(updatedFilters);
    }

    onClick();
  };

  useEffect(() => {
    if (resets) setResetFilter(title);
  }, []);

  return (
    <Styled.ToggleButton $active={filters[title]} onClick={handleClick}>
      {title}
    </Styled.ToggleButton>
  );
};
export default ToggleButton;
