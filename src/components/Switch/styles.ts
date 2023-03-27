import styled from '@emotion/styled';
import { shouldForwardPropDefault } from 'core/utils';
import type { SwitchProps } from './Switch';

const flexDirValues = Object.freeze({
  left: 'row-reverse',
  right: 'row',
  bottom: 'column',
  top: 'column-reverse'
});

export const SwitchLabel = styled('label', {
  label: 'switch-label',
  shouldForwardProp: shouldForwardPropDefault
})<SwitchProps>((props) => ({
  cursor: 'pointer',
  display: 'inline-flex',
  flex: '0 0 auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: flexDirValues[props.labelPosition || 'right'],
  gap: '0.75rem',

  ...(props.disabled && {
    cursor: 'default'
  })
}));

export const SwitchToggle = styled('div', {
  label: 'switch-toggle',
  shouldForwardProp: shouldForwardPropDefault
})<SwitchProps>((props) => ({
  display: 'inline-block',
  backgroundColor: props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].main, 0.25),
  borderRadius: '16px',
  position: 'relative',
  verticalAlign: 'middle',
  transition: 'background 0.15s',

  ...(props.disabled && {
    backgroundColor: `${props.theme.palette.rgba(props.theme.palette.text.disabled, 0.4)} !important`
  }),

  '&:before': {
    content: '""',
    display: 'block',
    backgroundColor: props.theme.palette.grey[200],
    borderRadius: '50%',
    position: 'absolute',
    left: '0px',
    transition: 'all 0.15s',

    ...(props.disabled && {
      backgroundColor: `${props.theme.palette.lighten(props.theme.palette.text.disabled, 10)} !important`
    }),

    ...(props.size === 'small' && {
      width: '1.063rem',
      height: '1.063rem',
      top: '-5px'
    }),

    ...(props.size === 'medium' && {
      width: '1.25rem',
      height: '1.25rem',
      top: '-4px'
    }),

    ...(props.size === 'large' && {
      width: '1.375rem',
      height: '1.375rem',
      top: '-3px'
    })
  },

  ...(props.size === 'small' && {
    width: '2.75rem',
    height: '0.5rem'
  }),

  ...(props.size === 'medium' && {
    width: '2.75rem',
    height: '0.75rem'
  }),

  ...(props.size === 'large' && {
    width: '2.75rem',
    height: '1rem'
  })
}));

export const SwitchInput = styled('input', {
  label: 'switch-input',
  shouldForwardProp: shouldForwardPropDefault
})<SwitchProps>((props) => ({
  position: 'absolute',
  visibility: 'hidden',
  appearance: 'none',

  '&:checked + div': {
    backgroundColor: props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].main, 0.5)
  },

  '&:checked + div:before': {
    left: '1.75rem',
    background: props.theme.palette[props.color || 'primary'].main
  }
}));
