import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { ToggleButtonGroupProps } from './ToggleButtonGroup';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: ToggleButtonGroupProps) => ({
          display: 'flex',
          flexDirection: props.orientation === 'horizontal' ? 'row' : 'column'
        }),
        firstElement: (props: ToggleButtonGroupProps) =>
          props.orientation === 'horizontal'
            ? {
                borderTopRightRadius: props.removeBorder ? theme.shape.borderRadius.small : 0,
                borderBottomRightRadius: props.removeBorder ? theme.shape.borderRadius.small : 0,
                borderRight: props.removeBorder
                  ? 'none'
                  : `1px solid ${theme.palette.rgba(theme.palette.text.primary, 0.2)}`,
                marginRight: props.removeBorder ? theme.spacing.margin[2] : '0'
              }
            : {
                borderBottomLeftRadius: props.removeBorder ? theme.shape.borderRadius.small : 0,
                borderBottomRightRadius: props.removeBorder ? theme.shape.borderRadius.small : 0,
                borderBottom: props.removeBorder
                  ? 'none'
                  : `1px solid ${theme.palette.rgba(theme.palette.text.primary, 0.2)}`,
                marginBottom: props.removeBorder ? theme.spacing.margin[2] : '0'
              },
        midElement: (props: ToggleButtonGroupProps) =>
          props.orientation === 'horizontal'
            ? {
                borderRadius: props.removeBorder ? theme.shape.borderRadius.small : 0,
                borderRight: props.removeBorder
                  ? 'none'
                  : `1px solid ${theme.palette.rgba(theme.palette.text.primary, 0.2)}`,
                marginRight: props.removeBorder ? theme.spacing.margin[2] : '0'
              }
            : {
                borderRadius: props.removeBorder ? theme.shape.borderRadius.small : 0,
                borderBottom: props.removeBorder
                  ? 'none'
                  : `1px solid ${theme.palette.rgba(theme.palette.text.primary, 0.2)}`,
                marginBottom: props.removeBorder ? theme.spacing.margin[2] : '0'
              },
        lastElement: (props: ToggleButtonGroupProps) =>
          props.orientation === 'horizontal'
            ? {
                borderTopLeftRadius: props.removeBorder ? theme.shape.borderRadius.small : 0,
                borderBottomLeftRadius: props.removeBorder ? theme.shape.borderRadius.small : 0
              }
            : {
                borderTopLeftRadius: props.removeBorder ? theme.shape.borderRadius.small : 0,
                borderTopRightRadius: props.removeBorder ? theme.shape.borderRadius.small : 0
              }
      },
      theme.overrides?.ToggleButtonGroup || {}
    ),
  { name: 'jds-toggle-btn-group' }
);
