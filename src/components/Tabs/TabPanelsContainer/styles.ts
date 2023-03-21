import styled from '@emotion/styled';
import { shouldForwardProp } from 'core/utils';

export const TabPanelContainer = styled('div', { label: 'tab-panel-cont', shouldForwardProp })({
  flexGrow: 1,
  padding: 0,
  '& > *:first-of-type': {
    height: '100%',
    '& > *:first-of-type': {
      height: '100%'
    }
  }
});
