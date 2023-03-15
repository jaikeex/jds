import { Typography } from 'components/Typography';
import * as React from 'react';
import { useStyles } from './useStyles';
import type { SliderMarksDefinition } from './types';
import type { SliderSize } from 'components/Slider/types';
import {
  calculateAbsolutePostionPercentage,
  calculateOffsetAdjustment,
  offsetAdjustmentValues
} from 'components/Slider/utils';

export interface SliderMarksProps {
  marks: SliderMarksDefinition;
  min: number;
  max: number;
  size: SliderSize;
}

const SliderMarks: React.FC<SliderMarksProps> = ({ marks = [], min = 0, max = 100, size = 'medium' }): JSX.Element => {
  const classNames = useStyles();

  return (
    <div className={classNames.root}>
      {marks.map((mark, index) => (
        <div
          className={classNames.mark}
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
        </div>
      ))}
    </div>
  );
};

SliderMarks.displayName = 'SliderMarks';
export default React.memo(SliderMarks);
