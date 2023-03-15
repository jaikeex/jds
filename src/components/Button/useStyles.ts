import type { Theme } from 'styling/types';
import type { ButtonProps } from './Button';
import { createStyles, mergeOverrides } from 'styling';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: {
          padding: '0.375rem 0.5rem',
          border: 'none',
          borderRadius: theme.shape.borderRadius.small,
          position: 'relative',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.25rem',
          transition: 'background-color 0.2s',
          cursor: 'pointer'
        },
        filled: (props: ButtonProps) => ({
          backgroundColor: theme.palette[props.color || 'primary'].main,
          '& span': {
            color: theme.palette[props.color || 'primary'].contrastText
          },
          '& svg': {
            fill: theme.palette[props.color || 'primary'].contrastText
          },
          '&:hover': {
            backgroundColor: theme.palette[props.color || 'primary'].dark
          }
        }),
        outlined: (props: ButtonProps) => ({
          backgroundColor: 'transparent',
          border: {
            width: 1,
            style: 'solid',
            color: theme.palette[props.color || 'primary'].main
          },
          '& span': {
            color: theme.palette[props.color || 'primary'].dark
          },
          '& svg': {
            fill: theme.palette[props.color || 'primary'].dark
          },
          '&:hover': {
            backgroundColor: theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.1)
          }
        }),
        subtle: (props: ButtonProps) => ({
          backgroundColor: 'transparent',
          '& span': {
            color: theme.palette[props.color || 'primary'].dark
          },
          '& svg': {
            fill: theme.palette[props.color || 'primary'].dark
          },
          '&:hover': {
            backgroundColor: theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.1)
          }
        }),
        icon: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            height: '1.2rem',
            width: '1.2rem'
          }
        },
        small: {
          minWidth: '5rem',
          height: '1.8rem',
          '& svg': {
            height: '1rem',
            width: '1rem'
          }
        },
        medium: {
          minWidth: '5rem',
          height: '2.25rem'
        },
        large: {
          fontSize: '1.125rem',
          minWidth: '6.25rem',
          height: '2.5rem',
          padding: '0.7rem, 1rem',
          '& svg': {
            height: '1.5rem',
            width: '1.5rem'
          }
        },
        disabled: {
          backgroundColor: `${theme.palette.grey[300]} !important`,
          '& span': {
            color: `${theme.palette.text.disabled} !important`
          },
          cursor: 'default'
        },
        text: {}
      },
      theme.overrides?.Button || {}
    ),
  { name: 'jds-button' }
);
