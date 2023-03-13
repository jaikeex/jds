import type { Theme } from 'styling/types';
import type { SelectProps } from './types';
import { createStyles, mergeOverrides } from 'styling';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: {
          fontFamily: 'inherit',
          fontSize: '1rem',
          transition: 'all 0.2s',
          width: '20rem',
          outline: 'none'
        },
        option: (props: SelectProps) => ({
          height: '1.75rem',
          backgroundColor: 'transparent',
          transition: 'background-color 0.1s',
          padding: [theme.spacing.padding[2], theme.spacing.padding[6]]
        }),
        optionDisabled: {
          color: theme.palette.grey[300]
        },
        optionSelected: (props: SelectProps) => ({
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.5)
        }),
        optionFocused: (props: SelectProps) => ({
          backgroundColor: theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.25)
        }),
        control: {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary
        },
        filled: (props: SelectProps) => ({
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
            borderTop: 'hidden',
            borderLeft: 'hidden',
            borderRight: 'hidden',
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
        outlined: (props: SelectProps) => ({
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
        subtle: (props: SelectProps) => ({
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
        value: {
          color: theme.palette.text.primary
        },
        multiValue: {
          backgroundColor:
            theme.name === 'dark'
              ? theme.palette.lighten(theme.palette.background.default, 15)
              : theme.palette.darken(theme.palette.background.default, 15)
        },
        multiValueLabel: {
          color: theme.palette.text.primary
        },
        multiValueRemove: {
          '&:hover': {
            backgroundColor:
              theme.name === 'dark'
                ? theme.palette.lighten(theme.palette.background.default, 20)
                : theme.palette.darken(theme.palette.background.default, 20)
          },
          '& path': {
            fill: theme.palette.text.primary
          }
        },
        separator: {
          display: 'none'
        },
        menu: {
          fontSize: '0.875rem',
          transition: 'all 0.15s',
          marginTop: theme.spacing.margin[2],
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          border: {
            width: '1px',
            style: 'solid',
            color: theme.palette.rgba(theme.palette.text.primary, 0.5)
          }
        },
        label: {
          fontWeight: 500,
          display: 'block',
          transition: 'all 0.15s',
          position: 'absolute',
          cursor: 'text',
          top: '0.25rem',
          left: '0.1rem',
          color: theme.palette.rgba(theme.palette.text.primary, 0.5)
        },
        labelTransformed: {
          fontSize: '0.875rem',
          marginLeft: 0,
          cursor: 'default',
          color: theme.palette.text.primary,
          top: '-1.5rem',
          left: '-0.5rem'
        },
        labelHidden: {
          transition: 'all 0s',
          opacity: 0
        },
        valueContainer: {
          overflow: 'visible'
        }
      },
      theme.overrides?.Select || {}
    ),
  {
    name: 'jds-select',
    element: document.getElementById('jds-select') as HTMLStyleElement
  }
);
