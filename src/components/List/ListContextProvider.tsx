import React, { useContext } from 'react';

export interface ListContextProps {
  isCompact: boolean;
}

export interface ListContextProviderProps {
  children?: React.ReactElement;
  compact?: boolean;
}

export const useListContext = (): ListContextProps => useContext(ListContext);

export const ListContext = React.createContext<ListContextProps>({
  isCompact: false
});

const ListContextProvider: React.FC<ListContextProviderProps> = ({
  children,
  compact = false
}) => {
  const defaultProps = React.useMemo(() => ({ isCompact: compact }), [compact]);

  return (
    <ListContext.Provider value={defaultProps}>{children}</ListContext.Provider>
  );
};

export default ListContextProvider;
