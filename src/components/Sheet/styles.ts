import styled from '@emotion/styled';
import type { SheetProps } from './Sheet';
import { shouldForwardPropDefault } from 'core/utils';

export const SheetRoot = styled('div', {
  label: 'sheet',
  shouldForwardProp: shouldForwardPropDefault
})<SheetProps>((props) => ({
  borderRadius: props.sharpCorners ? 0 : props.theme.shape.borderRadius.small,
  backgroundColor:
    props.theme.name === 'dark'
      ? props.theme.palette.lighten(props.theme.palette.background.sheet, props.level || 0)
      : props.theme.palette.background.sheet,
  border: props.outlined ? `1px solid ${props.theme.palette.rgba(props.theme.palette.text.primary, 0.2)}` : 'none',
  boxShadow: `0 ${(props.level || 2) / 2}px ${props.level}px ${props.theme.palette.rgba(
    props.theme.palette.common.black,
    0.2
  )}`
}));
