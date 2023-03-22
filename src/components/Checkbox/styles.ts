import styled from '@emotion/styled';
import { shouldForwardPropDefault } from 'core/utils';
import type { CheckboxProps } from './Checkbox';

const flexDirValues = Object.freeze({
  left: 'row-reverse',
  right: 'row',
  bottom: 'column',
  top: 'column-reverse'
});

const absolutePosMarkValues = Object.freeze({
  left: {
    right: 0
  },
  right: {
    left: 0
  },
  bottom: {
    left: '50%',
    transform: 'translateX(-50%)'
  },
  top: {
    left: '50%',
    transform: 'translateX(-50%)'
  }
});

export const CheckboxRoot = styled('div', {
  label: 'checkbox',
  shouldForwardProp: shouldForwardPropDefault
})<CheckboxProps>((props) => ({
  position: 'relative',
  display: 'inline-flex',
  flex: '0 0 auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: flexDirValues[props.labelPosition || 'right'],
  gap: '0.4rem',
  height: props.size === 'small' ? '0.938rem' : props.size === 'medium' ? '1.125rem' : '1.313rem'
}));

export const CheckboxMark = styled('div', {
  label: 'checkbox-mark',
  shouldForwardProp: shouldForwardPropDefault
})<CheckboxProps>((props) => ({
  display: props.icon ? 'none' : 'inline-block',
  transition: 'all 0.1s ease-out',
  opacity: 0,
  '& svg': {
    position: 'absolute',
    top: 0,
    ...absolutePosMarkValues[props.labelPosition || 'right'],
    fill: props.theme.palette.background.default,
    height: props.size === 'small' ? '0.938rem' : props.size === 'medium' ? '1.125rem' : '1.313rem',
    width: props.size === 'small' ? '0.938rem' : props.size === 'medium' ? '1.125rem' : '1.313rem'
  }
}));

export const CheckboxInput = styled('input', {
  label: 'checkbox-input',
  shouldForwardProp: shouldForwardPropDefault
})<CheckboxProps>((props) => ({
  flexShrink: 0,
  display: props.icon ? 'none' : 'inline-block',
  border: props.icon ? 'none' : '2px solid',
  borderRadius: '2px',
  appearance: 'none',
  outline: 0,
  transition: 'all 0.1s ease-out',
  borderColor: props.theme.palette.text.primary,
  '&:checked': {
    borderColor: props.theme.palette[props.color || 'primary'].main,
    backgroundColor: props.theme.palette[props.color || 'primary'].main
  },
  '&:checked ~label [data-id="checkbox-mark"]': {
    opacity: 1
  },

  ...(props.size === 'small' && {
    width: '0.938rem',
    height: '0.938rem'
  }),

  ...(props.size === 'medium' && {
    width: '1.125rem',
    height: '1.125rem'
  }),

  ...(props.size === 'large' && {
    width: '1.313rem',
    height: '1.313rem'
  }),

  ...(props.disabled && {
    borderColor: `${props.theme.palette.text.disabled} !important`,
    '&:checked': {
      borderColor: `${props.theme.palette.text.disabled} !important`,
      backgroundColor: `${props.theme.palette.text.disabled} !important`
    }
  })
}));

export const CheckboxLabel = styled('label', {
  label: 'checkbox-label',
  shouldForwardProp: shouldForwardPropDefault
})<CheckboxProps>((props) => ({
  cursor: 'pointer',
  '& svg': {
    transition: 'all 0.1s ease-out'
  },

  ...(props.disabled && {
    cursor: 'default !important'
  })
}));
