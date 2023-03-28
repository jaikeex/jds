import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { ThemeColorVariants } from 'core/types';
import type { SnackbarProps } from './Snackbar';
import { Typography } from 'components/Typography';
import { IconButton } from 'components/IconButton';
import { shouldForwardPropDefault } from 'core/utils';

const showSnackbarAnimation = keyframes({
  from: { opacity: 0.5, transform: 'scale(0.5)' },
  to: { opacity: 1, transform: 'scale(1)' }
});

export const Snackbar = styled('div', {
  label: 'snackbar',
  shouldForwardProp: shouldForwardPropDefault
})<SnackbarProps>((props) => ({
  width: '30rem',
  padding: `${props.theme.spacing[4]} ${props.theme.spacing[4]} ${props.theme.spacing[4]} ${props.theme.spacing[10]}`,
  border: 'none',
  borderRadius: props.theme.shape.borderRadius.medium,
  margin: props.theme.spacing[4],
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  animation: `${showSnackbarAnimation} 0.1s`,
  backgroundColor:
    props.color === ('primary' || undefined)
      ? props.theme.palette.grey[800]
      : props.theme.palette[props.color as ThemeColorVariants].main,
  '& svg': {
    marginRight: props.theme.spacing[4],
    fill:
      props.color === ('primary' || undefined)
        ? props.theme.palette.text.contrast.light
        : props.theme.palette[props.color || 'primary'].contrastText
  }
}));

export const SnackbarInfo = styled('div', {
  label: 'snackbar-info',
  shouldForwardProp: shouldForwardPropDefault
})({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const SnackbarAction = styled('div', {
  label: 'snackbar-action',
  shouldForwardProp: shouldForwardPropDefault
})({
  margin: `0 auto 0 0`
});

export const SnackbarIcon = styled('div', {
  label: 'snackbar-icon',
  shouldForwardProp: shouldForwardPropDefault
})({
  flexShrink: 0,
  marginRight: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const SnackbarMessage = styled(Typography, {
  label: 'snackbar-message'
})((props) => ({
  paddingRight: props.theme.spacing[4],
  display: 'flex',
  alignItems: 'center',
  color:
    props.color === ('primary' || undefined)
      ? [props.theme.palette.common.white, '!important']
      : [props.theme.palette[props.color as ThemeColorVariants].contrastText, '!important'],
  '& svg': {
    marginRight: props.theme.spacing[4]
  }
}));

export const SnackbarCloseButton = styled(IconButton, {
  label: 'snackbar-close-btn'
})<SnackbarProps>((props) => ({
  flexShrink: 0,
  alignSelf: 'flex-start',
  marginLeft: 'auto',
  '& svg': {
    fill:
      props.color === ('primary' || undefined)
        ? props.theme.palette.text.contrast.light
        : props.theme.palette[props.color || 'primary'].contrastText
  },
  '&:hover svg': {
    fill:
      props.color === ('primary' || undefined)
        ? props.theme.palette.text.contrast.light
        : props.theme.palette[props.color || 'primary'].contrastText
  }
}));
