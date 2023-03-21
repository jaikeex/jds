import styled from '@emotion/styled';
import type { ThemeColorVariants } from 'core/types';
import type { SvgIconProps } from './SvgIcon';
import { shouldForwardProp } from 'core/utils';

export const IconRoot = styled('svg', { label: 'icon', shouldForwardProp })<SvgIconProps>((props) => ({
  display: 'inline',
  fill:
    props.color === ('default' || undefined)
      ? props.theme.palette.text.primary
      : props.theme.palette[props.color as ThemeColorVariants].main
}));
