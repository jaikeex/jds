import type { ThemeColorVariants } from 'core/types';
import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { RadioProps } from './Radio';

const flexDirValues = {
  left: 'row-reverse',
  right: 'row',
  bottom: 'column',
  top: 'column-reverse'
};

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: {},
        label: (props: RadioProps) => ({
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: flexDirValues[props.labelPosition || 'right'],
          gap: '0.75rem'
        }),
        input: {
          display: 'none'
        },
        button: {
          position: 'relative'
        },
        small: {
          '& $button': {
            height: '1.188rem',
            width: '1.188rem'
          },
          '& #radio-background': {
            height: '1.188rem',
            width: '1.188rem'
          },
          '& #radio-center': {
            height: '0.688rem',
            width: '0.688rem'
          }
        },
        medium: {
          '& $button': {
            height: '1.375rem',
            width: '1.375rem'
          },
          '& #radio-background': {
            height: '1.375rem',
            width: '1.375rem'
          },
          '& #radio-center': {
            height: '0.75rem',
            width: '0.75rem'
          }
        },
        large: {
          '& $button': {
            height: '1.625rem',
            width: '1.625rem'
          },
          '& #radio-background': {
            height: '1.625rem',
            width: '1.625rem'
          },
          '& #radio-center': {
            height: '1rem',
            width: '1rem'
          }
        },
        disabled: {
          cursor: 'default !important',
          '& span': {
            color: theme.palette.text.disabled
          },
          '& svg': {
            fill: `${theme.palette.text.disabled} !important`
          }
        }
      },
      theme.overrides?.Radio || {}
    ),
  { name: 'jds-radio' }
);
