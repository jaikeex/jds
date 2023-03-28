import { Typography } from 'components/Typography';
import * as React from 'react';
import type { SliderMarksDefinition } from './types';
import {
  calculateAbsolutePostionPercentage,
  calculateOffsetAdjustment,
  offsetAdjustmentValues
} from 'components/Slider/utils';
import * as Styled from './styles';
import type { Size } from 'core/types';

export interface SliderMarksProps {
  marks?: SliderMarksDefinition;
  min?: number;
  max?: number;
  size?: Size;
}

const SliderMarks: React.FC<SliderMarksProps> = ({ marks = [], min = 0, max = 100, size = 'medium' }): JSX.Element => (
  <Styled.SliderMarks>
    {marks.map((mark, index) => (
      <Styled.Mark
        style={{
          left: `calc(${calculateAbsolutePostionPercentage(mark.value, min, max)}% - ${calculateOffsetAdjustment(
            mark.value,
            min,
            max,
            offsetAdjustmentValues.mark[size]
          )}px)`
        }}
        key={index}
      >
        <Typography variant="label">{mark.label}</Typography>
      </Styled.Mark>
    ))}
  </Styled.SliderMarks>
);

SliderMarks.displayName = 'SliderMarks';
export default React.memo(SliderMarks);
