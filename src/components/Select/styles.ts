import styled from '@emotion/styled';
import type { GroupBase } from 'react-select';
import { default as RSelect } from 'react-select';
import type { Selectable, SelectProps } from './types';

export const Select = styled(RSelect<Selectable, boolean, GroupBase<Selectable>>)<SelectProps>((props) => ({
  fontFamily: 'inherit',
  fontSize: '1rem',
  transition: 'all 0.2s',
  width: props.width || '100%',
  outline: 'none',
  minHeight: '2.5rem',
  position: 'relative'
}));

export const styles = {};
