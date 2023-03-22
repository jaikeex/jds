import styled from '@emotion/styled';
import { shouldForwardPropDefault } from 'core/utils';
import type { BackdropProps } from './Backdrop';

export const BackdropRoot = styled('div', {
  label: 'backdrop',
  shouldForwardProp: shouldForwardPropDefault
})<BackdropProps>((props) => ({
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 1000,
  backdropFilter: `brightness(${(10 - (props.level || 5)) * 10}%)`
}));
