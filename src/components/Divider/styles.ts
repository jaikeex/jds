import styled from '@emotion/styled';
import type { DividerProps } from './Divider';
import { shouldForwardPropDefault } from 'core/utils';

export const DividerRoot = styled('div', {
  label: 'divider',
  shouldForwardProp: shouldForwardPropDefault
})<DividerProps>((props) => ({
  display: 'block',
  padding: props.theme.spacing[0],
  width: props.orientation === 'horizontal' ? '100%' : '1px',
  flexGrow: 0,
  margin:
    props.removeMargin || props.flexItem
      ? props.theme.spacing[0]
      : props.orientation === 'horizontal'
      ? '1rem 0'
      : '0 1rem',
  backgroundColor:
    props.color === 'default' || undefined
      ? props.theme.palette.divider
      : props.theme.palette[props.color || 'primary'].main,

  ...(!props.flexItem && {
    height: props.orientation === 'horizontal' ? '1px' : '100%'
  }),

  'hr': {
    border: 'none',
    margin: props.theme.spacing[0],
    width: props.orientation === 'horizontal' ? '100%' : '1px',

    ...(!props.flexItem && {
      height: props.orientation === 'horizontal' ? '1px' : '100%'
    })
  }
}));
