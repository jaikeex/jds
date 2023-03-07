import type { Theme } from 'theming/types';
import type { ButtonProps } from './Button';
import { createStyles } from 'theming/ThemeProvider';

export const useStyles = createStyles(
  (theme: Theme) => ({
    root: {
      padding: '0.375rem 0.5rem',
      border: 'none',
      borderRadius: theme.shape.borderRadius,
      position: 'relative',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.25rem',
      transition: 'background-color 0.3s',
      cursor: 'pointer',
      fontFamily: 'inherit'
    },
    filled: (props: ButtonProps) => ({
      backgroundColor: theme.palette[props.color || 'primary'].main,
      '& span': {
        color: `${theme.palette.getContrastText(theme.palette[props.color || 'primary'].main)} !important`
      },
      '& svg': {
        fill: `${theme.palette.getContrastText(theme.palette[props.color || 'primary'].main)} !important`
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
        color: `${theme.palette[props.color || 'primary'].dark} !important`
      },
      '& svg': {
        fill: `${theme.palette[props.color || 'primary'].dark} !important`
      },
      '&:hover': {
        backgroundColor: theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.1)
      }
    }),
    subtle: (props: ButtonProps) => ({
      backgroundColor: 'transparent',
      '& span': {
        color: `${theme.palette[props.color || 'primary'].dark} !important`
      },
      '& svg': {
        fill: `${theme.palette[props.color || 'primary'].dark} !important`
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
    }
  }),
  { name: 'jds-button' }
);
