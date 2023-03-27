import styled from '@emotion/styled';
import type { RadioGroupProps } from './RadioGroup';
import { shouldForwardPropDefault } from 'core/utils';

export const RadioGroupRoot = styled('div', {
  label: 'radio-group',
  shouldForwardProp: shouldForwardPropDefault
})<RadioGroupProps>((props) => ({
  display: 'flex',
  flexDirection: props.orientation === 'horizontal' ? 'row' : 'column',
  gap: '1rem'
}));
