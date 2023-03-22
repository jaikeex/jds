import styled from '@emotion/styled';
import type { SliderMarksProps } from './SliderMarks';
import { shouldForwardPropDefault } from 'core/utils';

export const SliderMarks = styled('div', {
  label: 'slider-marks',
  shouldForwardProp: shouldForwardPropDefault
})<SliderMarksProps>((props) => ({
  position: 'relative',
  width: '100%',
  height: '2rem',
  marginTop: props.theme.spacing[4]
}));

export const Mark = styled('div', {
  label: 'mark',
  shouldForwardProp: shouldForwardPropDefault
})({
  position: 'absolute',
  transform: 'translateX(-50%)'
});
