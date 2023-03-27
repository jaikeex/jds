import styled from '@emotion/styled';
import type { SnackbarProviderProps } from './SnackbarProvider';
import { shouldForwardPropDefault } from 'core/utils';

export const SnackbarProviderBox = styled('div', {
  label: 'snackbar-provider',
  shouldForwardProp: shouldForwardPropDefault
})<SnackbarProviderProps>((props) => ({
  width: '31rem',
  position: 'fixed',
  zIndex: 10000,
  [props.location?.horizontal || 'right']: 0,
  [props.location?.vertical || 'top']: 0
}));
