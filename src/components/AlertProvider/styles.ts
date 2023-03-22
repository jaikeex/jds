import styled from '@emotion/styled';
import type { AlertProviderProps } from './AlertProvider';
import { shouldForwardPropDefault } from 'core/utils';

export const AlertProviderBox = styled('div', {
  label: 'alert-provider',
  shouldForwardProp: shouldForwardPropDefault
})<AlertProviderProps>((props) => ({
  width: '31rem',
  position: 'fixed',
  zIndex: 10000,
  [props.location?.horizontal || 'right']: 0,
  [props.location?.vertical || 'top']: 0
}));
