import styled from '@emotion/styled';
import type { ThemeColorVariants } from 'core/types';
import type { SvgIconProps } from './SvgIcon';
import { shouldForwardPropDefault } from 'core/utils';

export const IconRoot = styled('svg', {
  label: 'icon',
  shouldForwardProp: shouldForwardPropDefault
})<SvgIconProps>((props) => ({
  display: 'inline',
  fill:
    props.color === ('default' || undefined)
      ? props.theme.palette.text.primary
      : props.theme.palette[props.color as ThemeColorVariants].main,

  ...(props.disabled && {
    fill: props.theme.palette.rgba(props.theme.palette.text.primary, 0.3)
  })
}));
