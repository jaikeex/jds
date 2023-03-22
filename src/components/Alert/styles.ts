import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { ThemeColorVariants } from 'core/types';
import type { AlertProps } from './Alert';
import { Typography } from 'components/Typography';
import { IconButton } from 'components/IconButton';
import { shouldForwardPropDefault } from 'core/utils';

const showAlertAnimation = keyframes({
  from: { opacity: 0.5, transform: 'scale(0.5)' },
  to: { opacity: 1, transform: 'scale(1)' }
});

export const Alert = styled('div', {
  label: 'alert',
  shouldForwardProp: shouldForwardPropDefault
})<AlertProps>((props) => ({
  width: '30rem',
  padding: `${props.theme.spacing[8]} ${props.theme.spacing[4]} ${props.theme.spacing[8]} ${props.theme.spacing[10]}`,
  border: 'none',
  borderRadius: props.theme.shape.borderRadius.medium,
  margin: props.theme.spacing[4],
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  animation: `${showAlertAnimation} 0.1s`,
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

export const AlertInfo = styled('div', {
  label: 'alert-info',
  shouldForwardProp: shouldForwardPropDefault
})({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const AlertAction = styled('div', {
  label: 'alert-action',
  shouldForwardProp: shouldForwardPropDefault
})((props) => ({
  margin: `${props.theme.spacing[4]} auto 0 0`
}));

export const AlertIcon = styled('div', {
  label: 'alert-icon',
  shouldForwardProp: shouldForwardPropDefault
})({
  flexShrink: 0,
  marginRight: '0.5rem'
});

export const AlertMessage = styled(Typography, {
  label: 'alert-message'
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

export const AlertCloseButton = styled(IconButton, {
  label: 'alert-close-btn'
})<AlertProps>((props) => ({
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
