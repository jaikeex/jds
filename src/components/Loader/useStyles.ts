import type { ThemeColorVariants } from 'core/types';
import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { LoaderProps } from './Loader';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        '@keyframes rotation': {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        },
        root: (props: LoaderProps) => ({
          border: {
            width: '5px',
            style: 'solid',
            color:
              props.color === ('default' || undefined)
                ? theme.palette.text.primary
                : theme.palette[props.color as ThemeColorVariants].main
          },
          borderBottomColor: 'transparent',
          borderRadius: '50%',
          display: 'inline-block',
          animation: '$rotation 1s linear infinite'
        }),
        small: {
          width: '2rem',
          height: '2rem'
        },
        medium: {
          width: '3rem',
          height: '3rem'
        },
        large: {
          width: '4rem',
          height: '4rem'
        }
      },
      theme.overrides?.Loader || {}
    ),
  {
    name: 'jds-loader'
  }
);
