import React, { useContext, useState } from 'react';
import type { SnackbarProps, SnackbarLocation } from 'components/Snackbar';
import Snackbar from 'components/Snackbar/Snackbar';
import { makeId } from 'core/utils';
import * as Styled from './styles';

export interface SnackbarContextProps {
  addItem: (props: SnackbarProps) => void;
  removeItem: (id: string) => void;
}

export const SnackbarContext = React.createContext<SnackbarContextProps>({
  addItem: () => {},
  removeItem: () => {}
});

export const useSnackbarContext = () => useContext(SnackbarContext);

export interface SnackbarProviderProps {
  location?: SnackbarLocation;
  maxItems?: number;
  children?: React.ReactNode;
}

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  location = { horizontal: 'right', vertical: 'top' },
  maxItems = 3,
  children
}) => {
  const [snackbarItems, setSnackbarItems] = useState<SnackbarProps[]>([]);

  const removeSnackbarItemFromStack = (id: string) => {
    setSnackbarItems((prevState) => {
      const newState = [...prevState];
      return newState.filter((item) => item.id !== id);
    });
  };

  const addSnackbarItemToStack = (props: SnackbarProps) => {
    setSnackbarItems((prevState) => {
      props.id = `jds-snackbar-${makeId(5)}`;
      return [props, ...prevState];
    });
  };

  const contextState = React.useMemo(
    () => ({
      addItem: addSnackbarItemToStack,
      removeItem: removeSnackbarItemFromStack
    }),
    [addSnackbarItemToStack, removeSnackbarItemFromStack]
  );

  return (
    <SnackbarContext.Provider value={contextState}>
      <Styled.SnackbarProviderBox location={location}>
        {snackbarItems.slice(-maxItems).map((item, index) => (
          <Snackbar {...item} key={item.id} style={{ zIndex: 9999 }} />
        ))}
      </Styled.SnackbarProviderBox>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
