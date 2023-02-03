import React, { useContext } from 'react';
import { AlertProps } from '../../components/Alert/Alert';

export interface AlertContextState {
  addItem: (props: AlertProps) => void;
  removeItem: (id: string) => void;
}

export const useAlertContext = () => {
  return useContext(AlertContext);
};

const AlertContext = React.createContext<AlertContextState>({
  addItem: () => {},
  removeItem: () => {}
});

export default AlertContext;
