import styled from '@emotion/styled';
import type { SliderMarksProps } from './SliderMarks';
import { shouldForwardProp } from 'core/utils';

export const SliderMarks = styled('div', { label: 'slider-marks', shouldForwardProp })<SliderMarksProps>((props) => ({
  position: 'relative',
  width: '100%',
  height: '2rem',
  marginTop: props.theme.spacing[4]
}));

export const Mark = styled('div', { label: 'mark' })({
  position: 'absolute',
  transform: 'translateX(-50%)'
});
