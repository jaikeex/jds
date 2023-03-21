import styled from '@emotion/styled';
import type { TextFieldProps } from './TextField';
import { shouldForwardProp } from 'core/utils';

export const TextFieldRoot = styled('div', { label: 'textfield', shouldForwardProp })<TextFieldProps>((props) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.15s ease-in-out',
  borderRadius: props.theme.shape.borderRadius.small,
  width: props.width || '100%',
  height: '2.5rem',
  padding: `0 ${props.theme.spacing[2]}`,

  ...(props.appearance === 'filled' && {
    border: 'none',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].light, 0.1),
    borderBottom: `1px solid ${
      props.disabled
        ? props.theme.palette.grey[400]
        : props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].light, 0.6)
    }`,
    '&:hover': {
      borderColor: props.disabled ? props.theme.palette.grey[400] : props.theme.palette[props.color || 'primary'].main,
      backgroundColor: props.disabled
        ? props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].light, 0.1)
        : props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].light, 0.15)
    },
    '&:focus-within': {
      borderColor: props.theme.palette[props.color || 'primary'].main,
      boxShadow: `inset 0 -2px 2px -2px ${props.theme.palette[props.color || 'primary'].main}`
    }
  }),

  ...(props.appearance === 'outlined' && {
    border: `1px solid ${
      props.disabled
        ? props.theme.palette.grey[400]
        : props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].main, 0.6)
    }`,
    '&:hover': {
      borderColor: props.disabled ? props.theme.palette.grey[400] : props.theme.palette[props.color || 'primary'].main
    },
    '&:focus-within': {
      borderColor: props.theme.palette[props.color || 'primary'].main,
      boxShadow: `inset 0 0 0 1px ${props.theme.palette[props.color || 'primary'].main}`
    }
  }),

  ...(props.appearance === 'subtle' && {
    border: 'none',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: `1px solid ${
      props.disabled
        ? props.theme.palette.grey[400]
        : props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].light, 0.6)
    }`,
    '&:hover': {
      borderColor: props.disabled ? props.theme.palette.grey[400] : props.theme.palette[props.color || 'primary'].main
    },
    '&:focus-within': {
      borderColor: props.theme.palette[props.color || 'primary'].main,
      boxShadow: `inset 0 -2px 2px -2px ${props.theme.palette[props.color || 'primary'].main}`
    }
  })
}));

export const TextFieldInput = styled('input', { label: 'textfield-input', shouldForwardProp })<TextFieldProps>(
  (props) => ({
    display: 'block',
    padding: `${props.theme.spacing[4]} ${props.theme.spacing[3]}`,
    flex: 1,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: '0.937rem',
    color: props.theme.palette.text.primary,
    '&::-webkit-input-placeholder': {
      fontWeight: 400,
      color: props.theme.palette.rgba(props.theme.palette.text.primary, 0.5)
    }
  })
);

export const Label = styled('label', { label: 'textfield-label', shouldForwardProp })<
  TextFieldProps & {
    inputValue: string;
    isFocused: boolean;
  }
>((props) => ({
  fontWeight: 500,
  transition: 'all 0.1s ease-in-out',
  position: 'absolute',
  marginLeft: props.theme.spacing[2],
  top: '0.5rem',
  cursor: 'text',
  color: props.theme.palette.rgba(props.theme.palette.text.primary, 0.8),
  '& span': {
    fontSize: '0.875rem'
  },

  ...((!props.transformLabel || props.placeholder || props.inputValue || props.isFocused || props.elementBefore) && {
    fontSize: '0.75rem',
    marginLeft: 0,
    cursor: 'default',
    color: props.theme.palette.text.primary,
    top: '-1.4rem'
  })
}));

export const TextFieldDecorator = styled('div', { label: 'textfield-element', shouldForwardProp })<TextFieldProps>(
  (props) => ({
    lineHeight: '1.5rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: props.theme.palette.rgba(props.theme.palette.text.primary, 0.6),
    whiteSpace: 'nowrap',
    '& span': {
      fontSize: '0.875rem'
    }
  })
);
