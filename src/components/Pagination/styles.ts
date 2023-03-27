import styled from '@emotion/styled';
import { ToggleButton } from 'components/ToggleButton';
import { shouldForwardPropDefault } from 'core/utils';
import type { PaginationProps } from './Pagination';

export const Pagination = styled('ul', {
  label: 'pagination',
  shouldForwardProp: shouldForwardPropDefault
})({
  listStyle: 'none',
  display: 'flex',
  gap: '0.125rem'
});

export const PaginationItem = styled(ToggleButton, {
  label: 'pagination-item'
})<PaginationProps>((props) => ({
  flexGrow: 0,

  ...(props.size === 'small' && {
    minWidth: '1.75rem',
    height: '1.75rem',

    '& span': {
      fontSize: '0.813rem'
    }
  }),

  ...(props.size === 'medium' && {
    minWidth: '2.125rem',
    height: '2.125rem'
  }),

  ...(props.size === 'large' && {
    minWidth: '2.625rem',
    height: '2.625rem'
  })
}));
