import styled from '@emotion/styled';
import { Button } from 'components/Button';
import type { TabButtonProps } from './TabButton';
import { shouldForwardProp } from 'core/utils';

export const TabButtonRoot = styled(Button, { label: 'tab-button', shouldForwardProp })<
  TabButtonProps & { active: boolean; }
>((props) => ({
  flexShrink: 0,
  borderRadius: 0,
  height: '2rem',
  paddingBottom: props.theme.spacing[2],
  paddingTop: props.theme.spacing[2],
  transition: 'all 0.15s',
  color: props.theme.palette.text.primary,
  whiteSpace: 'nowrap',
  width: 'max-content',
  '&:hover': {
    backgroundColor: 'transparent'
  },

  ...(props.active && {
    color: props.theme.palette.primary.main,
    boxShadow: `inset 0 -2px 0 0 ${props.theme.palette.primary.main}`
  })
}));
