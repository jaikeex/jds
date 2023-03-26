import type { GroupBase, StylesConfig } from 'react-select';
import type { Selectable, SelectProps } from './types';
import { defaultLightTheme } from 'styling/default';
import { useTheme } from 'styling';

export const useSelectStyles = (
  props: SelectProps<boolean>,
  style: StylesConfig<Selectable, boolean, GroupBase<Selectable>>
) => {
  const { theme } = useTheme() || { defaultLightTheme };

  const selectStyles: StylesConfig<Selectable, boolean, GroupBase<Selectable>> = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
      fontSize: '0.937rem',
      height: props.height || '2,5rem',
      minHeight: props.height || '2,5rem',

      ...(props.appearance === 'filled' && {
        border: 'none',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: props.disabled
          ? theme.palette.rgba(theme.palette.text.disabled, 0.1)
          : theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.1),
        borderBottom: `1px solid ${
          props.disabled
            ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
            : theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.6)
        }`,
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
          boxShadow: `inset 0 -2px 2px -2px ${theme.palette[props.color || 'primary'].main}`
        }
      }),

      ...(props.appearance === 'outlined' && {
        border: `1px solid ${
          props.disabled
            ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
            : theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.6)
        }`,
        '&:hover': {
          borderColor: props.disabled
            ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
            : theme.palette[props.color || 'primary'].main
        },
        '&:focus-within': {
          borderColor: theme.palette[props.color || 'primary'].main,
          boxShadow: `inset 0 0 0 1px ${theme.palette[props.color || 'primary'].main}`
        }
      }),

      ...(props.appearance === 'subtle' && {
        border: 'none',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottom: `1px solid ${
          props.disabled
            ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
            : theme.palette.rgba(theme.palette[props.color || 'primary'].light, 0.6)
        }`,
        '&:hover': {
          borderColor: props.disabled
            ? theme.palette.rgba(theme.palette.text.disabled, 0.5)
            : theme.palette[props.color || 'primary'].main
        },
        '&:focus-within': {
          borderColor: theme.palette[props.color || 'primary'].main,
          boxShadow: `inset 0 -2px 2px -2px ${theme.palette[props.color || 'primary'].main}`
        }
      }),

      ...(style.control && style.control(provided, state))
    }),

    option: (provided, state) => ({
      ...provided,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      gap: '0.375rem',
      cursor: 'pointer',
      height: '2rem',
      backgroundColor: 'transparent',
      transition: 'background-color 0.15s',
      padding: `${theme.spacing[2]} ${theme.spacing[6]}`,
      fontWeight: 'normal',

      ...(state.isDisabled && {
        cursor: 'default !important',
        color: theme.palette.rgba(theme.palette.text.disabled, 0.8)
      }),

      ...(state.isSelected && {
        color: theme.palette.text.primary,
        backgroundColor: !state.data?.color
          ? [theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.2), '!important']
          : [theme.palette.rgba(theme.palette[state.data.color || 'primary'].main, 0.2), '!important']
      }),

      ...(state.isFocused && {
        backgroundColor: !state.data?.color
          ? theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.15)
          : theme.palette.rgba(theme.palette[state.data.color || 'primary'].main, 0.15),
        '&:active': {
          backgroundColor: !state.data?.color
            ? theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.3)
            : theme.palette.rgba(theme.palette[state.data.color || 'primary'].main, 0.3)
        }
      }),

      ...(style.option && style.option(provided, state))
    }),

    input: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      fontFamily: 'inherit',
      fontSize: '0.937rem',
      fontWeight: 'normal',
      color: theme.palette.text.primary,

      ...(style.input && style.input(provided, state))
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      overflow: 'visible',
      fontWeight: 'normal',
      maxWidth: '85%',

      ...(props.height && {
        height: props.height,
        minHeight: props.height
      }),

      ...(style.valueContainer && style.valueContainer(provided, state))
    }),

    singleValue: (provided, state) => ({
      ...provided,
      color: props.disabled ? theme.palette.text.disabled : theme.palette.text.primary,

      ...(style.singleValue && style.singleValue(provided, state))
    }),

    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor:
        theme.name === 'dark'
          ? theme.palette.lighten(theme.palette.background.default, 15)
          : theme.palette.darken(theme.palette.background.default, 15),

      ...(style.multiValue && style.multiValue(provided, state))
    }),

    multiValueLabel: (provided, state) => ({
      ...provided,
      paddingRight: props.readonly ? theme.spacing[3] : theme.spacing[2],
      color: props.disabled ? theme.palette.lighten(theme.palette.text.disabled, 15) : theme.palette.text.primary,

      ...(style.multiValueLabel && style.multiValueLabel(provided, state))
    }),

    multiValueRemove: (provided, state) => ({
      ...provided,
      display: props.readonly ? 'none' : 'inline-flex',
      '&:hover': {
        backgroundColor:
          theme.name === 'dark'
            ? theme.palette.lighten(theme.palette.background.default, 20)
            : theme.palette.darken(theme.palette.background.default, 20)
      },
      '& path': {
        fill: props.disabled ? theme.palette.text.disabled : theme.palette.text.primary
      },

      ...(style.multiValueRemove && style.multiValueRemove(provided, state))
    }),

    indicatorSeparator: (provided, state) => ({
      display: 'none',

      ...(style.indicatorSeparator && style.indicatorSeparator(provided, state))
    }),

    menu: (provided, state) => ({
      ...provided,
      fontSize: '0.875rem',
      transition: 'all 0.15s',
      marginTop: theme.spacing[2],
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      border: `1px  solid ${theme.palette.rgba(theme.palette.text.primary, 0.5)}`,

      ...(style.menu && style.menu(provided, state))
    }),

    clearIndicator: (provided, state) => ({
      ...provided,
      display: props.readonly ? 'none' : 'inline-flex',

      ...(style.clearIndicator && style.clearIndicator(provided, state))
    }),

    placeholder: (provided, state) => {
      const hasInput = state.hasValue || state.selectProps.inputValue;
      const transformLabel = (hasInput && props.transformLabel) || props.placeholder || !props.transformLabel;
      const stripLabel = hasInput && props.placeholder;

      return {
        ...provided,
        fontWeight: 500,
        display: 'block',
        transition: 'all 0.15s',
        position: 'absolute',
        cursor: 'text',
        top: '0.25rem',
        left: '0.1rem',
        whiteSpace: 'nowrap',
        color: theme.palette.rgba(theme.palette.text.primary, 0.5),

        ...(props.placeholder && {
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

        ...(transformLabel && {
          fontSize: '0.875rem',
          marginLeft: 0,
          cursor: 'default',
          color: props.disabled ? theme.palette.rgba(theme.palette.text.disabled, 0.5) : theme.palette.text.primary,
          top: '-1.5rem',
          left: props.isMulti ? '0' : '-0.5rem'
        }),

        ...(stripLabel && {
          '&::after': {
            content: '""""'
          }
        }),

        ...(style.placeholder && style.placeholder(provided, state))
      };
    },

    indicatorsContainer: (provided, state) => ({
      ...provided,
      ...(style.indicatorsContainer && style.indicatorsContainer(provided, state))
    }),

    dropdownIndicator: (provided, state) => ({
      ...provided,
      ...(style.dropdownIndicator && style.dropdownIndicator(provided, state))
    })
  };

  return selectStyles;
};
