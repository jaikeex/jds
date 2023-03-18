import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { ButtonGroupProps } from './ButtonGroup';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: ButtonGroupProps) => ({
          display: 'flex',
          flexDirection: props?.orientation === 'vertical' || undefined ? 'column' : 'row'
        }),
        firstElement: (props: ButtonGroupProps) =>
          props?.orientation === 'horizontal' || undefined
            ? {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderRight: '1px solid #888888',
                marginRight: props?.appearance === 'outlined' ? '-1px' : '0'
              }
            : {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderBottom: '1px solid #888888',
                marginBottom: props?.appearance === 'outlined' ? '-1px' : '0'
              },
        midElement: (props: ButtonGroupProps) =>
          props?.orientation === 'horizontal' || undefined
            ? {
                borderRadius: 0,
                borderRight: '1px solid #888888',
                marginRight: props?.appearance === 'outlined' ? '-1px' : '0'
              }
            : {
                borderRadius: 0,
                borderBottom: '1px solid #888888',
                marginBottom: props?.appearance === 'outlined' ? '-1px' : '0'
              },
        lastElement: (props: ButtonGroupProps) =>
          props?.orientation === 'horizontal' || undefined
            ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
            : { borderTopLeftRadius: 0, borderTopRightRadius: 0 }
      },
      theme.overrides?.ButtonGroup || {}
    ),
  {
    name: 'jds-button-group',
    index: 4
  }
);
