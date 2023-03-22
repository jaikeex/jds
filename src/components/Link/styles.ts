import styled from '@emotion/styled';
import { Typography } from 'components/Typography';
import type { LinkProps } from './Link';
import { shouldForwardPropDefault } from 'core/utils';

export const LinkRoot = styled('a', {
  label: 'link',
  shouldForwardProp: shouldForwardPropDefault
})<LinkProps>((props) => ({
  cursor: 'pointer',
  textDecoration: 'none',
  '&:link': {
    textDecoration: 'none',
    textDecorationLine: props.underline === 'allways' ? 'underline' : 'none'
  }
}));

export const LinkText = styled(Typography, { label: 'link-text' })<LinkProps>((props) => ({
  textDecorationLine: props.underline === 'allways' ? 'underline' : 'none',
  '&:hover': {
    textDecorationLine: props.underline === 'none' ? 'none' : 'underline'
  }
}));
