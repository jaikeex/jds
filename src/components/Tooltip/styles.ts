import styled from '@emotion/styled';
import type { ThemeColorVariants } from 'core/types';
import type { TooltipProps } from './Tooltip';
import { shouldForwardPropDefault } from 'core/utils';

export const TooltipRoot = styled('div', {
  label: 'tooltip',
  shouldForwardProp: shouldForwardPropDefault
})<TooltipProps>((props) => ({
  position: 'absolute',
  padding: [props.theme.spacing[2], props.theme.spacing[2]],
  width: 'fit-content',
  maxWidth: '20rem',
  borderRadius: props.theme.shape.borderRadius.small,
  fontSize: '0.875rem',
  fontWeight: '500',
  backgroundColor:
    props.color === ('default' || undefined)
      ? props.theme.palette.grey[700]
      : props.theme.palette[props.color as ThemeColorVariants].main,
  color:
    props.color === ('default' || undefined)
      ? props.theme.palette.text.contrast.light
      : props.theme.palette[props.color as ThemeColorVariants].contrastText
}));
