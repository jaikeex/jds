import styled from '@emotion/styled';
import { shouldForwardProp } from 'core/utils';
import type { ToggleButtonGroupProps } from './ToggleButtonGroup';

export const ToggleButtonGroupRoot = styled('div', {
  label: 'toggle-button-group',
  shouldForwardProp
})<ToggleButtonGroupProps>((props) => ({
  display: 'flex',
  flexDirection: props.orientation === 'horizontal' ? 'row' : 'column',
  '& > *': {
    '&:not(:last-of-type)': {
      ...(props.orientation === 'horizontal' && {
        borderTopRightRadius: props.removeBorder ? props.theme.shape.borderRadius.small : 0,
        borderBottomRightRadius: props.removeBorder ? props.theme.shape.borderRadius.small : 0,
        borderRight: props.removeBorder
          ? 'none'
          : `1px solid ${props.theme.palette.rgba(props.theme.palette.text.primary, 0.2)}`,

        marginRight: props.removeBorder ? props.theme.spacing[2] : '0'
      }),

      ...(props.orientation === 'vertical' && {
        borderBottomLeftRadius: props.removeBorder ? props.theme.shape.borderRadius.small : 0,
        borderBottomRightRadius: props.removeBorder ? props.theme.shape.borderRadius.small : 0,
        borderBottom: props.removeBorder
          ? 'none'
          : `1px solid ${props.theme.palette.rgba(props.theme.palette.text.primary, 0.2)}`,
        marginBottom: props.removeBorder ? props.theme.spacing[2] : '0'
      })
    },

    '&:not(:first-of-type)': {
      ...(props.orientation === 'horizontal' && {
        borderTopLeftRadius: props.removeBorder ? props.theme.shape.borderRadius.small : 0,
        borderBottomLeftRadius: props.removeBorder ? props.theme.shape.borderRadius.small : 0,
        borderRight: props.removeBorder
          ? 'none'
          : `1px solid ${props.theme.palette.rgba(props.theme.palette.text.primary, 0.2)}`,

        marginRight: props.removeBorder ? props.theme.spacing[2] : '0'
      }),

      ...(props.orientation === 'vertical' && {
        borderTopLeftRadius: props.removeBorder ? props.theme.shape.borderRadius.small : 0,
        borderTopRightRadius: props.removeBorder ? props.theme.shape.borderRadius.small : 0,
        borderBottom: props.removeBorder
          ? 'none'
          : `1px solid ${props.theme.palette.rgba(props.theme.palette.text.primary, 0.2)}`,
        marginBottom: props.removeBorder ? props.theme.spacing[2] : '0'
      })
    }
  }
}));
