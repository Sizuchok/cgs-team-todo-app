import { useContext, useEffect } from 'react';
import { TogglerContext } from '../toggler/toggler.component';
import * as Styled from './toggle-button.styled';

type Props = {
  title: string;
  onClick: () => void;
  _default?: boolean;
  color?: string;
};

const ToggleButton = ({ title, onClick, _default, color }: Props) => {
  const { filters, setFilters, resetFilter, setResetFilter } = useContext(TogglerContext);

  const handleClick = () => {
    if (_default) {
      // if resets/default filter is aready active, do nothing
      if (filters[title]) return;

      setFilters({
        [title]: !filters[title]
      });
    } else {
      const updatedFilters = {
        ...filters,
        [title]: !filters[title]
      };

      updatedFilters[resetFilter] = false;

      setFilters(updatedFilters);
    }

    onClick();
  };

  useEffect(() => {
    if (_default) {
      setResetFilter(title);
      setFilters({
        [title]: true
      });
    }
  }, []);

  useEffect(() => {
    if (_default && !Object.values(filters).includes(true) && resetFilter) {
      setFilters({
        [resetFilter]: true
      });
    }
  }, [filters]);

  return (
    <Styled.ToggleButton $active={filters[title]} onClick={handleClick} $color={color}>
      {title}
    </Styled.ToggleButton>
  );
};

export default ToggleButton;
