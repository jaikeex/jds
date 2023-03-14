import { mergeOverrides, createStyles } from 'styling';
import type { Theme } from 'styling/types';
import type { LinkProps } from './Link';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: LinkProps) => ({
          cursor: 'pointer',
          textDecoration: 'none',
          textDecorationLine: props.underline === 'allways' ? 'underline' : 'none',
          '&:link': {
            textDecoration: 'none',
            textDecorationLine: props.underline === 'allways' ? 'underline' : 'none'
          },
          '&:hover': {
            textDecorationLine: props.underline === 'none' ? 'none' : 'underline'
          }
        })
      },
      theme.overrides?.Link || {}
    ),
  { name: 'jdes-link' }
);
