import type { ThemeColorVariants } from 'core/types';
import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { RadioGroupProps } from './RadioGroup';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: RadioGroupProps) => ({
          display: 'flex',
          flexDirection: props.orientation === 'horizontal' ? 'row' : 'column',
          gap: '1rem'
        })
      },
      theme.overrides?.RadioGroup || {}
    ),
  { name: 'jds-radio' }
);
