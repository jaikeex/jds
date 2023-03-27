import type { SnackbarProps } from 'components/Snackbar';
import { useSnackbarContext } from './SnackbarProvider';

export const useSnackbar = () => {
  const { addItem } = useSnackbarContext();

  const displaySnackbar = (props: SnackbarProps) => {
    addItem(props);
  };

  return displaySnackbar;
};
