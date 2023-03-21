import styled from '@emotion/styled';
import { shouldForwardProp } from 'core/utils';

export const CodeRoot = styled('div', { label: 'code', shouldForwardProp })((props) => ({
  '& pre': {
    borderRadius: props.theme.shape.borderRadius.medium,
    overFlow: 'auto'
  },
  '& code': {
    fontFamily: props.theme.typography.monospaceFontFamily,
    fontSize: '0.875rem'
  }
}));
