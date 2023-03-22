import styled from '@emotion/styled';
import type { ButtonGroupProps } from './ButtonGroup';
import { shouldForwardPropDefault } from 'core/utils';

export const ButtonGroupRoot = styled('div', {
  label: 'button-group',
  shouldForwardProp: shouldForwardPropDefault
})<ButtonGroupProps>((props) => ({
  display: 'flex',
  flexDirection: props?.orientation === 'vertical' || undefined ? 'column' : 'row',

  '& > *': {
    '&:not(:last-of-type)': {
      ...(props.orientation === 'horizontal' && {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: `1px solid ${props.theme.palette.grey[400]}`,
        marginRight: props?.appearance === 'outlined' ? '-1px' : '0'
      }),

      ...(props.orientation === 'vertical' && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottom: `1px solid ${props.theme.palette.grey[400]}`,
        marginBottom: props?.appearance === 'outlined' ? '-1px' : '0'
      })
    },

    '&:not(:first-of-type)': {
      ...(props.orientation === 'horizontal' && {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }),

      ...(props.orientation === 'vertical' && {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      })
    }
  }
}));
