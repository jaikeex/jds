import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { CheckboxProps } from './Checkbox';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: CheckboxProps) => ({
          position: 'relative',
          display: 'inline-flex',
          flex: '0 0 auto',
          alignItems: 'center',
          gap: '0.4rem',
          height: props.size === 'small' ? '0.938rem' : props.size === 'medium' ? '1.125rem' : '1.313rem'
        }),
        mark: (props: CheckboxProps) => ({
          display: props.icon ? 'none' : 'inline-block',
          transition: 'all 0.1s ease-out',
          opacity: 0,
          '& svg': {
            position: 'absolute',
            left: 0,
            top: 0,
            fill: theme.palette.background.default,
            height: props.size === 'small' ? '0.938rem' : props.size === 'medium' ? '1.125rem' : '1.313rem',
            width: props.size === 'small' ? '0.938rem' : props.size === 'medium' ? '1.125rem' : '1.313rem'
          }
        }),
        input: (props: CheckboxProps) => ({
          display: props.icon ? 'none' : 'inline-block',
          border: props.icon ? 'none' : '2px solid',
          borderRadius: '2px',
          appearance: 'none',
          outline: 0,
          transition: 'all 0.1s ease-out',
          borderColor: theme.palette.text.primary,
          '&:checked': {
            borderColor: theme.palette[props.color || 'primary'].main,
            backgroundColor: theme.palette[props.color || 'primary'].main
          },
          '&:checked ~$label $mark': {
            opacity: 1
          }
        }),
        label: {
          cursor: 'pointer',
          '& svg': {
            transition: 'all 0.1s ease-out'
          }
        },
        disabled: {
          cursor: 'not-allowed'
        },
        small: {
          width: '0.938rem',
          height: '0.938rem'
        },
        medium: {
          width: '1.125rem',
          height: '1.125rem'
        },
        large: {
          width: '1.313rem',
          height: '1.313rem'
        }
      },
      theme.overrides?.Checkbox || {}
    ),
  {
    name: 'jds-checkbox'
  }
);
