import styled from '@emotion/styled';
import { IconButton } from 'components/IconButton';
import type { TabsProps } from './Tabs';
import { shouldForwardPropDefault } from 'core/utils';

export const TabsRoot = styled('div', {
  label: 'tabs',
  shouldForwardProp: shouldForwardPropDefault
})<TabsProps>((props) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: props.theme.palette.background.default,
  paddingTop: props.theme.spacing[4]
}));

export const TabsButtonPanel = styled('div', {
  label: 'tabs-btn-panel',
  shouldForwardProp: shouldForwardPropDefault
})<TabsProps>((props) => ({
  position: 'relative',
  flexGrow: 0,
  padding: `0 ${
    props.scrollButtons === 'allways'
      ? props.theme.spacing[24]
      : props.removeHorizontalPadding
      ? 0
      : props.theme.spacing[4]
  }`,
  display: 'flex',
  justifyContent: props.justifyButtons || 'flex-start',
  overflowX: 'auto',
  overFlowY: 'hidden',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  '& > *': {
    flexGrow: props.justifyButtons === 'stretch' ? 1 : 0
  }
}));

export const TabsScrollButtonWrapper = styled('div', {
  label: 'tabs-scroll-btn-wrapper',
  shouldForwardProp: shouldForwardPropDefault
})<TabsProps & { direction: 'left' | 'right'; }>((props) => ({
  backgroundColor: 'inherit',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  zIndex: 100,
  width: '3rem',
  height: '2rem',
  paddingLeft: props.direction === 'left' ? 0 : props.theme.spacing[2],
  paddingRight: props.direction === 'right' ? 0 : props.theme.spacing[2]
}));

export const TabsScrollButton = styled(IconButton, { label: 'tabs-scroll-btn' })({
  borderRadius: 0,
  width: '2rem',
  height: '2rem'
});
