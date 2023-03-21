import styled from '@emotion/styled';
import { shouldForwardProp } from 'core/utils';
import type { AlertProviderProps } from './AlertProvider';

export const AlertProviderBox = styled('div', { label: 'alert-provider', shouldForwardProp })<AlertProviderProps>(
  (props) => ({
    width: '31rem',
    position: 'fixed',
    zIndex: 10000,
    [props.location?.horizontal || 'right']: 0,
    [props.location?.vertical || 'top']: 0
  })
);
