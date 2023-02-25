import React, { useContext, useState } from 'react';

export interface MenuContextProps {
  isOpen?: boolean | undefined;
  setIsOpen?: (state: boolean | undefined) => void;
}

export interface MenuContextProviderProps extends React.PropsWithChildren {
  defaultIsOpen?: boolean | undefined;
}

export const useMenuContext = () => {
  return useContext(MenuContext);
};

export const MenuContext = React.createContext<MenuContextProps>({});

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({
  children = null,
  defaultIsOpen = undefined
}) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(defaultIsOpen);

  return (
    <MenuContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
