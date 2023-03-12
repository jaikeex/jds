import type { ThemeColorVariants } from 'core/types';
import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { TooltipProps } from './Tooltip';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        container: {
          position: 'relative',
          display: 'inline-block'
        },
        content: (props: TooltipProps) => ({
          position: 'absolute',
          padding: [theme.spacing.padding[2], theme.spacing.padding[2]],
          width: 'fit-content',
          maxWidth: '20rem',
          borderRadius: theme.shape.borderRadius.small,
          fontSize: '0.875rem',
          fontWeight: '500',
          backgroundColor:
            props.color === ('default' || undefined)
              ? theme.palette.grey[700]
              : theme.palette[props.color as ThemeColorVariants].main,
          color:
            props.color === ('default' || undefined)
              ? theme.palette.text.contrast.light
              : theme.palette[props.color as ThemeColorVariants].contrastText
        })
      },
      theme.overrides?.Tooltip || {}
    ),
  {
    name: 'jds-tooltip'
  }
);
