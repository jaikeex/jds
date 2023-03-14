import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { TextFieldProps } from './TextField';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: TextFieldProps) => ({
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.15s ease-in-out',
          borderRadius: theme.shape.borderRadius.small,
          width: props.width || '100%',
          height: '2.5rem',
          padding: [0, theme.spacing.padding[2]]
        }),
        input: (props: TextFieldProps) => ({
          display: 'block',
          padding: [theme.spacing.padding[4], theme.spacing.padding[3]],
          flex: 1,
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          fontFamily: 'inherit',
          fontSize: '0.875rem',
          color: theme.palette.text.primary,
          '&::-webkit-input-placeholder': {
            fontWeight: 400,
            color: theme.palette.rgba(theme.palette.text.primary, 0.5)
          }
        }),
        filled: (props: TextFieldProps) => ({
          border: 'none',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.1),
          borderBottom: {
            width: '1px',
            style: 'solid',
            color: props.disabled
              ? theme.palette.grey[400]
              : theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.6)
          },
          '&:hover': {
            borderColor: props.disabled ? theme.palette.grey[400] : theme.palette[props.color || 'primary'].main,
            backgroundColor: props.disabled
              ? theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.1)
              : theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.15)
          },
          '&:focus-within': {
            borderColor: theme.palette[props.color || 'primary'].main,
            boxShadow: {
              inset: 'inset',
              x: 0,
              y: '-2px',
              blur: '2px',
              spread: '-2px',
              color: theme.palette[props.color || 'primary'].main
            }
          }
        }),
        outlined: (props: TextFieldProps) => ({
          border: {
            width: '1px',
            style: 'solid',
            color: props.disabled
              ? theme.palette.grey[400]
              : theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.6)
          },
          '&:hover': {
            borderColor: props.disabled ? theme.palette.grey[400] : theme.palette[props.color || 'primary'].main
          },
          '&:focus-within': {
            borderColor: theme.palette[props.color || 'primary'].main,
            boxShadow: {
              inset: 'inset',
              x: 0,
              y: 0,
              blur: 0,
              spread: '1px',
              color: theme.palette[props.color || 'primary'].main
            }
          }
        }),
        subtle: (props: TextFieldProps) => ({
          border: 'none',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottom: {
            width: '1px',
            style: 'solid',
            color: props.disabled
              ? theme.palette.grey[400]
              : theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.6)
          },
          '&:hover': {
            borderColor: props.disabled ? theme.palette.grey[400] : theme.palette[props.color || 'primary'].main
          },
          '&:focus-within': {
            borderColor: theme.palette[props.color || 'primary'].main,
            boxShadow: {
              inset: 'inset',
              x: 0,
              y: '-2px',
              blur: '2px',
              spread: '-2px',
              color: theme.palette[props.color || 'primary'].main
            }
          }
        }),
        label: {
          fontWeight: 500,
          transition: 'all 0.1s ease-in-out',
          position: 'absolute',
          marginLeft: theme.spacing.margin[2],
          top: '0.5rem',
          cursor: 'text',
          color: theme.palette.rgba(theme.palette.text.primary, 0.8),
          '& span': {
            fontSize: '0.875rem'
          }
        },
        labelTransformed: {
          fontSize: '0.75rem',
          marginLeft: 0,
          cursor: 'default',
          color: theme.palette.text.primary,
          top: '-1.4rem'
        },
        element: {
          lineHeight: '1.5rem',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.palette.rgba(theme.palette.text.primary, 0.6),
          whiteSpace: 'nowrap',
          '& span': {
            fontSize: '0.875rem'
          }
        }
      },
      theme.overrides?.TextField || {}
    ),
  {
    name: 'jds-textfield'
  }
);
