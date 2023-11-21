import { ChangeEvent } from 'react';
import { ReactComponent as SearchIcon } from '../../../../assets/image/search-bar-icon.svg';
import * as Styled from './search-bar.styled';

type Props = {
  query: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ query, onChange }: Props) => (
  <Styled.SearchBarContainer>
    <SearchIcon />
    <Styled.Input type="text" placeholder="Search" value={query} onChange={onChange} />
  </Styled.SearchBarContainer>
);

export default SearchBar;
