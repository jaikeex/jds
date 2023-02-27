import React, { useContext } from 'react';
import type { AlertProps } from '@components/Alert';

export interface AlertContextState {
  addItem: (props: AlertProps) => void;
  removeItem: (id: string) => void;
}

export const useAlertContext = () => useContext(AlertContext);

const AlertContext = React.createContext<AlertContextState>({
  addItem: () => {},
  removeItem: () => {}
});

export default AlertContext;
