import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export type TFilters = {
  [key: string]: boolean;
};

type TTogglerContext = {
  filters: TFilters;
  setFilters: Dispatch<SetStateAction<TFilters>>;
  resetFilter: string;
  setResetFilter: Dispatch<SetStateAction<string>>;
};

export const TogglerContext = createContext<TTogglerContext>({} as TTogglerContext);

type Props = {
  children: ReactNode;
};

const Toggler = ({ children }: Props) => {
  const [filters, setFilters] = useState<TFilters>({});
  const [resetFilter, setResetFilter] = useState<string>('');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TogglerContext.Provider value={{ filters, setFilters, resetFilter, setResetFilter }}>
      {children}
    </TogglerContext.Provider>
  );
};
export default Toggler;
