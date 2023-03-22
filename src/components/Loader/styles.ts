import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import type { ThemeColorVariants } from 'core/types';
import type { LoaderProps } from './Loader';
import { shouldForwardPropDefault } from 'core/utils';

const loaderAnimation = keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});

export const LoaderRoot = styled('div', {
  label: 'loader',
  shouldForwardProp: shouldForwardPropDefault
})<LoaderProps>((props) => ({
  border: `5px solid ${
    props.color === ('default' || undefined)
      ? props.theme.palette.text.primary
      : props.theme.palette[props.color as ThemeColorVariants].main
  }`,
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  display: 'inline-block',
  animation: `${loaderAnimation} 1s linear infinite`,

  ...(props.size === 'small' && {
    width: '2rem',
    height: '2rem'
  }),

  ...(props.size === 'medium' && {
    width: '3rem',
    height: '3rem'
  }),

  ...(props.size === 'large' && {
    width: '4rem',
    height: '4rem'
  })
}));
