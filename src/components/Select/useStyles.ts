import type { Theme } from 'styling/types';
import type { SelectProps } from './types';
import { createStyles, mergeOverrides } from 'styling';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: SelectProps) => ({
          fontFamily: 'inherit',
          fontSize: '1rem',
          transition: 'all 0.2s',
          width: props.width || '100%',
          outline: 'none',
          minHeight: '2.5rem',
          position: 'relative'
        }),
        control: {
          backgroundColor: 'transparent',
          color: theme.palette.text.primary,
          fontSize: '0.937rem'
        },
        filled: (props: SelectProps) => ({
          border: 'none',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: props.disabled
            ? theme.palette.rgba(theme.palette.text.disabled, 0.1)
            : theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.1),
          borderBottom: {
            width: '1px',
            style: 'solid',
            color: props.disabled
              ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
              : theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.6)
          },
          '&:hover': {
            borderColor: props.disabled
              ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
              : theme.palette[props.color || 'primary'].main,
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
              ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
              : theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.6)
          },
          '&:hover': {
            borderColor: props.disabled
              ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
              : theme.palette[props.color || 'primary'].main
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
              ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
              : theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.6)
          },
          '&:hover': {
            borderColor: props.disabled
              ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
              : theme.palette[props.color || 'primary'].main
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
        value: (props: SelectProps) => ({
          color: props.disabled ? theme.palette.text.disabled : theme.palette.text.primary
        }),
        multiValue: (props: SelectProps) => ({
          backgroundColor:
            theme.name === 'dark'
              ? theme.palette.lighten(theme.palette.background.default, 15)
              : theme.palette.darken(theme.palette.background.default, 15)
        }),
        multiValueLabel: (props: SelectProps) => ({
          paddingRight: props.readonly ? theme.spacing.padding[3] : theme.spacing.padding[2],
          color: props.disabled ? theme.palette.lighten(theme.palette.text.disabled, 15) : theme.palette.text.primary
        }),
        multiValueRemove: (props: SelectProps) => ({
          display: props.readonly ? 'none' : 'inline-flex',
          '&:hover': {
            backgroundColor:
              theme.name === 'dark'
                ? theme.palette.lighten(theme.palette.background.default, 20)
                : theme.palette.darken(theme.palette.background.default, 20)
          },
          '& path': {
            fill: props.disabled ? theme.palette.text.disabled : theme.palette.text.primary
          }
        }),
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
        input: {
          backgroundColor: 'transparent',
          fontFamily: 'inherit',
          fontSize: '0.937rem',
          color: theme.palette.text.primary
        },
        placeholder: (props: SelectProps) => ({
          '&::after': {
            content: `"${props.placeholder}"`,
            color: theme.palette.rgba(theme.palette.text.primary, 0.5),
            position: 'absolute',
            width: 'max-content',
            left: '0.75rem',
            top: '1.8rem',
            fontSize: '0.938rem'
          }
        }),
        label: {
          fontWeight: 500,
          display: 'block',
          transition: 'all 0.15s',
          position: 'absolute',
          cursor: 'text',
          top: '0.25rem',
          left: '0.1rem',
          whiteSpace: 'nowrap',
          color: theme.palette.rgba(theme.palette.text.primary, 0.5)
        },
        labelTransformed: (props: SelectProps) => ({
          fontSize: '0.875rem',
          marginLeft: 0,
          cursor: 'default',
          color: props.disabled ? theme.palette.rgba(theme.palette.text.disabled, 0.5) : theme.palette.text.primary,
          top: '-1.5rem',
          left: props.isMulti ? '0' : '-0.5rem'
        }),
        labelStripped: (props: SelectProps) => ({
          '&::after': {
            content: ['""', '!important']
          }
        }),
        valueContainer: (props: SelectProps) => ({
          maxHeight: props.preventOverflow ? '2rem' : '',
          overflow: 'hidden'
        }),
        clearIndicator: (props: SelectProps) => ({
          display: props.readonly ? 'none' : 'inline-flex'
        })
      },
      theme.overrides?.Select || {}
    ),
  {
    name: 'jds-select'
  }
);
