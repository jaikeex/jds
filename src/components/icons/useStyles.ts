import type { ThemeColorVariants } from 'core/types';
import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { SvgIconProps } from './SvgIcon';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: SvgIconProps) => ({
          display: 'inline',
          fill:
            props.color === ('default' || undefined)
              ? theme.palette.text.primary
              : theme.palette[props.color as ThemeColorVariants].main
        })
      },
      theme.overrides?.Icon || {}
    ),
  {
    name: 'jds-icon'
  }
);
