import styled from '@emotion/styled';
import type { ThemeColorVariants } from 'core/types';
import type { TypographyProps } from './Typography';
import { shouldForwardPropDefault } from 'core/utils';

export const TypographyRoot = styled('div', {
  label: 'typography',
  shouldForwardProp: shouldForwardPropDefault
})<TypographyProps>((props) => ({
  ...(props.variant && props.theme.typography[props.variant]),

  fontFamily: props.theme.typography.fontFamily,
  marginTop: 0,
  marginBottom: props.gutterBottom ? props.theme.typography[props.variant || 'body3'].marginBottom : 0,
  textAlign: props.textAlign,
  hyphens: props.hyphens ? 'auto' : 'none',
  color:
    props.color === ('default' || undefined)
      ? props.theme.palette.text.primary
      : props.theme.palette[props.color as ThemeColorVariants].main,
  textDecorationColor:
    props.color === ('default' || undefined)
      ? props.theme.palette.text.primary
      : props.theme.palette[props.color as ThemeColorVariants].main,

  ...(props.upperCase && {
    textTransform: 'uppercase'
  }),

  ...(props.bold && {
    fontWeight: 'bold'
  }),

  ...(props.noWrap && {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  })
}));
