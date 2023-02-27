import React, { useState } from 'react';
import './AlertProvider.styles.scss';
import { AlertContext } from '@store/AlertContext';
import type { AlertProps } from '@components/Alert';
import { Alert } from '@components/Alert';
import { makeId } from '@core/utils';
import classNames from 'classnames';
import type { AlertLocation } from '@components/Alert';

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

  const classes = classNames(
    'jds-alert-container',
    `jds-alert-container--${location.horizontal}`,
    `jds-alert-container--${location.vertical}`
  );

  const removeAlertItemFromStack = (id: string) => {
    setAlertItems((prevState) => {
      const newState = [...prevState];
      return newState.filter((item) => item.id !== id);
    });
  };

  const addAlertItemToStack = (props: AlertProps) => {
    setAlertItems((prevState) => {
      props.id = `jds-alert-${makeId(10)}`;
      props.location = location;
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
      <div className={classes}>
        {alertItems.slice(-maxItems).map((item, index) => (
          <Alert
            {...item}
            key={item.id}
            style={{ zIndex: (9999 - index).toString() }}
          />
        ))}
      </div>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
