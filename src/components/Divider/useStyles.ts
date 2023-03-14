import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { DividerProps } from './Divider';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: DividerProps) => ({
          display: 'block',
          padding: theme.spacing.padding[0],
          width: props.orientation === 'horizontal' ? '100%' : '1px',
          height: props.orientation === 'horizontal' ? '1px' : '100%',
          flexGrow: 0,
          margin:
            props.removeMargin || props.flexItem
              ? theme.spacing.margin[0]
              : props.orientation === 'horizontal'
              ? '1rem 0'
              : '0 1rem',
          backgroundColor:
            props.color === 'default' || undefined
              ? theme.palette.divider
              : theme.palette[props.color || 'primary'].main,
          '& hr': {
            border: 'none',
            margin: theme.spacing.margin[0],
            width: props.orientation === 'horizontal' ? '100%' : '1px',
            height: props.orientation === 'horizontal' ? '1px' : '100%'
          }
        })
      },
      theme.overrides?.Divider || {}
    ),
  {
    name: 'jds-divider'
  }
);
