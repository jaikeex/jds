import styled from '@emotion/styled';
import type { ThemeColorVariants } from 'core/types';
import type { ListItemProps } from './ListItem';
import { shouldForwardProp } from 'core/utils';

export const ListItemRoot = styled('li', { label: 'list-item', shouldForwardProp })<ListItemProps>((props) => ({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  backgroundColor:
    props.color === ('default' || undefined)
      ? 'transparent'
      : props.theme.palette.rgba(props.theme.palette[props.color as ThemeColorVariants].dark, 0.4),

  ...(props.selected && {
    backgroundColor:
      props.color === ('default' || undefined)
        ? props.theme.palette.rgba(props.theme.palette.common.blue[400], 0.2)
        : props.theme.palette.rgba(props.theme.palette[props.color as ThemeColorVariants].light, 0.5)
  }),

  ...(props.clickable && {
    cursor: 'pointer',
    transition: 'box-shadow 0.15s',
    '&:hover': {
      boxShadow: `inset 0 0 100px 100px ${props.theme.palette.rgba(props.theme.palette.text.primary, 0.1)}`
    }
  }),

  ...(props.disabled && {
    cursor: 'not-allowed',
    '& *': {
      color: props.theme.palette.text.disabled,
      fill: props.theme.palette.text.disabled
    },
    '&:hover': {
      boxShadow: 'none'
    }
  }),

  ...(props.compact
    ? {
        height: '2rem',
        padding: `0 ${props.theme.spacing[4]}`
      }
    : {
        height: '3rem',
        padding: `${props.theme.spacing[2]} ${props.theme.spacing[4]}`
      })
}));

export const ListItemDecorator = styled('div', { label: 'list-item-deco', shouldForwardProp })({
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center'
});

export const ListItemContent = styled('div', { label: 'list-item-content', shouldForwardProp })((props) => ({
  flexGrow: 1,
  padding: `0 ${props.theme.spacing[3]}`
}));
