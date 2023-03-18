import type { Theme } from 'styling/types';
import { createStyles, mergeOverrides } from 'styling';
import type { GroupBase, OptionProps } from 'react-select';
import type { Selectable } from 'components/Select/types';
import type { ThemeColorVariants } from 'core/types';

export const useStyles = createStyles(
  (theme: Theme) => ({
    option: (
      props: Partial<OptionProps<Selectable, boolean, GroupBase<Selectable>> & Record<'color', ThemeColorVariants>>
    ) => ({
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      gap: '0.375rem',
      cursor: 'pointer',
      height: '2rem',
      backgroundColor: 'transparent',
      transition: 'background-color 0.15s',
      padding: [theme.spacing.padding[2], theme.spacing.padding[6]]
    }),
    optionDisabled: {
      cursor: 'default !important',
      color: theme.palette.rgba(theme.palette.text.disabled, 0.8)
    },
    optionSelected: (
      props: Partial<OptionProps<Selectable, boolean, GroupBase<Selectable>> & Record<'color', ThemeColorVariants>>
    ) => ({
      color: theme.palette.text.primary,
      backgroundColor: !props.data?.color
        ? [theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.2), '!important']
        : [theme.palette.rgba(theme.palette[props.data.color || 'primary'].main, 0.2), '!important']
    }),
    optionFocused: (
      props: Partial<OptionProps<Selectable, boolean, GroupBase<Selectable>> & Record<'color', ThemeColorVariants>>
    ) => ({
      backgroundColor: !props.data?.color
        ? theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.15)
        : theme.palette.rgba(theme.palette[props.data.color || 'primary'].main, 0.15),
      '&:active': {
        backgroundColor: !props.data?.color
          ? theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.3)
          : theme.palette.rgba(theme.palette[props.data.color || 'primary'].main, 0.3)
      }
    })
  }),
  // theme.overrides?.Select || {}
  {
    name: 'jds-select-option',
    index: 20
  }
);
