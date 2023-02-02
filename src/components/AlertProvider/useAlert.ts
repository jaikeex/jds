import { makeId } from '@core/utils';
import Alert, { AlertProps } from '../Alert';
import { useAlertContext } from '../../store/AlertContext';

export const useAlert = () => {
  const { addItem } = useAlertContext();

  const displayAlert = (props: AlertProps) => {
    addItem(props);
  };

  return { displayAlert };
};
