import type { SheetProps } from './Sheet';
import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: SheetProps) => ({
          padding: theme.spacing.padding[2],
          borderRadius: props.sharpCorners ? 0 : theme.shape.borderRadius.small,
          backgroundColor:
            theme.name === 'dark'
              ? theme.palette.lighten(theme.palette.background.sheet, props.level || 0)
              : theme.palette.background.sheet,
          border: props.outlined
            ? {
                width: '1px',
                style: 'solid',
                color: theme.palette.rgba(theme.palette.text.primary, 0.2)
              }
            : 'none',
          boxShadow: {
            x: 0,
            y: (props.level || 2) / 2,
            blur: `${props.level}px`,
            color: theme.palette.rgba(theme.palette.common.black, 0.2)
          }
        })
      },
      theme.overrides?.Sheet || {}
    ),
  {
    name: 'jds-sheet'
  }
);
