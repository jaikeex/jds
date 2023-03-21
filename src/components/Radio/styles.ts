import styled from '@emotion/styled';
import type { RadioProps } from './Radio';
import { shouldForwardProp } from 'core/utils';

const flexDirValues = Object.freeze({
  left: 'row-reverse',
  right: 'row',
  bottom: 'column',
  top: 'column-reverse'
});

export const RadioInput = styled('input', { label: 'radio-input', shouldForwardProp })({ display: 'none' });

export const RadioLabel = styled('label', { label: 'radio-label', shouldForwardProp })<RadioProps>((props) => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: flexDirValues[props.labelPosition || 'right'],
  gap: '0.75rem',

  ...(props.disabled && {
    cursor: 'default !important',
    '& span': {
      color: props.theme.palette.text.disabled
    },
    '& svg': {
      fill: `${props.theme.palette.text.disabled} !important`
    }
  })
}));

export const RadioButton = styled('div', { label: 'radio-btn', shouldForwardProp })<RadioProps>((props) => ({
  position: 'relative',

  ...(props.size === 'small' && {
    height: '1.188rem',
    width: '1.188rem',
    '& [data-icon-id="radio-background"]': {
      height: '1.188rem',
      width: '1.188rem'
    },
    '& [data-icon-id="radio-center"]': {
      height: '0.688rem',
      width: '0.688rem'
    }
  }),

  ...(props.size === 'medium' && {
    height: '1.375rem',
    width: '1.375rem',
    '& [data-icon-id="radio-background"]': {
      height: '1.375rem',
      width: '1.375rem'
    },
    '& [data-icon-id="radio-center"]': {
      height: '0.75rem',
      width: '0.75rem'
    }
  }),

  ...(props.size === 'large' && {
    height: '1.625rem',
    width: '1.625rem',
    '& [data-icon-id="radio-background"]': {
      height: '1.625rem',
      width: '1.625rem'
    },
    '& [data-icon-id="radio-center"]': {
      height: '1rem',
      width: '1rem'
    }
  })
}));
