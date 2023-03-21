import styled from '@emotion/styled';
import { shouldForwardProp } from 'core/utils';

export const ListRoot = styled('ul', { label: 'list', shouldForwardProp })((props) => ({
  listStyle: 'none',
  padding: props.theme.spacing[0],
  margin: props.theme.spacing[0]
}));
