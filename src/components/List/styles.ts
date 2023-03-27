import styled from '@emotion/styled';
import { shouldForwardPropDefault } from 'core/utils';

export const ListRoot = styled('ul', {
  label: 'list',
  shouldForwardProp: shouldForwardPropDefault
})((props) => ({
  listStyle: 'none',
  padding: props.theme.spacing[0],
  margin: props.theme.spacing[0]
}));
