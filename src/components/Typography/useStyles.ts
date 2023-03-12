import type { Theme } from 'styling/types';
import type { TypographyProps } from './Typography';
import { createStyles, mergeOverrides } from 'styling/ThemeProvider';
import type { ThemeColorVariants } from 'core/types';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: TypographyProps) => ({
          fontFamily: 'inherit',
          marginTop: 0,
          color:
            props.color === ('default' || undefined)
              ? theme.palette.text.primary
              : theme.palette[props.color as ThemeColorVariants].main,
          textDecorationColor:
            props.color === ('default' || undefined)
              ? theme.palette.text.primary
              : theme.palette[props.color as ThemeColorVariants].main
        }),
        uppercase: {
          textTransform: 'uppercase'
        },
        h1: {
          ...theme.typography['h1']
        },
        h2: {
          ...theme.typography['h2']
        },
        h3: {
          ...theme.typography['h3']
        },
        h4: {
          ...theme.typography['h4']
        },
        h5: {
          ...theme.typography['h5']
        },
        h6: {
          ...theme.typography['h6']
        },
        subHeading1: {
          ...theme.typography['subHeading1']
        },
        subHeading2: {
          ...theme.typography['subHeading2']
        },
        body1: {
          ...theme.typography['body1']
        },
        body2: {
          ...theme.typography['body2']
        },
        body3: {
          ...theme.typography['body3']
        },
        caption: {
          ...theme.typography['caption']
        },
        label: {
          ...theme.typography['label']
        },
        button: {
          ...theme.typography['button']
        }
      },
      theme.overrides?.Typography || {}
    ),
  { name: 'jds-typography' }
);
