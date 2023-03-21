import React, { useState } from 'react';
import { AlertContext } from 'store/AlertContext';
import type { AlertProps } from 'components/Alert';
import { Alert } from 'components/Alert';
import { makeId } from 'core/utils';
import type { AlertLocation } from 'components/Alert';
import * as Styled from './styles';

export interface AlertProviderProps {
  location?: AlertLocation;
  maxItems?: number;
  items?: AlertProps[];
  children?: React.ReactNode;
}

const AlertProvider: React.FC<AlertProviderProps> = ({
  location = { horizontal: 'right', vertical: 'top' },
  maxItems = 3,
  items = [],
  children
}) => {
  const [alertItems, setAlertItems] = useState<AlertProps[]>(items);

  const removeAlertItemFromStack = (id: string) => {
    setAlertItems((prevState) => {
      const newState = [...prevState];
      return newState.filter((item) => item.id !== id);
    });
  };

  const addAlertItemToStack = (props: AlertProps) => {
    setAlertItems((prevState) => {
      props.id = `jds-alert-${makeId(10)}`;
      return [props, ...prevState];
    });
  };

  const contextState = React.useMemo(
    () => ({
      addItem: addAlertItemToStack,
      removeItem: removeAlertItemFromStack
    }),
    [addAlertItemToStack, removeAlertItemFromStack]
  );

  return (
    <AlertContext.Provider value={contextState}>
      <Styled.AlertProviderBox location={location}>
        {alertItems.slice(-maxItems).map((item, index) => (
          <Alert {...item} key={item.id} style={{ zIndex: (9999 - index).toString() }} />
        ))}
      </Styled.AlertProviderBox>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
