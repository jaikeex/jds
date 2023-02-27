import React, { useContext, useState } from 'react';

export interface MenuContextProps {
  isOpen: boolean | undefined;
  setIsOpen: (state: boolean | undefined) => void;
}

export interface MenuContextProviderProps extends React.PropsWithChildren {
  defaultIsOpen?: boolean | undefined;
}

export const useMenuContext = () => useContext(MenuContext);

export const MenuContext = React.createContext<MenuContextProps>({
  isOpen: undefined,
  setIsOpen: () => {}
});

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({
  children = null,
  defaultIsOpen = undefined
}) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(defaultIsOpen);

  const defaultProps = React.useMemo(
    () => ({ isOpen: isOpen, setIsOpen: setIsOpen }),
    [isOpen, setIsOpen]
  );

  return (
    <MenuContext.Provider value={defaultProps}>{children}</MenuContext.Provider>
  );
};
