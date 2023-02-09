import React, { useContext, useState } from 'react';

export interface ListContextProps {
  isCompact?: boolean;
}

export interface ListContextProviderProps {
  children?: React.ReactElement;
  compact?: boolean;
}

export const useListContext = () => {
  return useContext(ListContext);
};

export const ListContext = React.createContext<ListContextProps>({});

const ListContextProvider: React.FC<ListContextProviderProps> = ({
  children,
  compact = false
}) => {
  return (
    <ListContext.Provider value={{ isCompact: compact }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
