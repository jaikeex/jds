import styled from '@emotion/styled';
import type { TabPanelProps } from './TabPanel';
import { shouldForwardProp } from 'core/utils';

export const TabPanelRoot = styled('div', { label: 'tab-panel', shouldForwardProp })<TabPanelProps>((props) => ({
  flexGrow: 1,
  padding: [
    props.removeVerticalPadding ? 0 : props.theme.spacing[4],
    props.removeHorizontalPadding ? 0 : props.theme.spacing[4],
    props.removeVerticalPadding ? 0 : props.theme.spacing[4],
    props.removeHorizontalPadding ? 0 : props.theme.spacing[4]
  ]
}));
