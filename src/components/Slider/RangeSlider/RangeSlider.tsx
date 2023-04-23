import React, { useCallback, useEffect, useState } from 'react';
import type { RangeSliderValue } from './types';
import type { Size, ThemeColorVariants } from 'core/types';
import { Typography } from 'components/Typography';
import type { SliderMarksDefinition } from 'components/Slider/SliderMarks/types';
import { SliderMarks } from 'components/Slider/SliderMarks';
import {
  offsetAdjustmentValues,
  calculateAbsolutePostionPercentage,
  calculateOffsetAdjustment
} from 'components/Slider/utils';
import * as Styled from './styles';

export interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: RangeSliderValue;
  color?: ThemeColorVariants;
  value?: RangeSliderValue;
  size?: Size;
  width?: string | number;
  marks?: SliderMarksDefinition;
  id?: string;
  displayValue?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onInputChange?: (value: RangeSliderValue) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = { min: 25, max: 75 },
  color = 'primary',
  value = defaultValue,
  size = 'medium',
  displayValue = true,
  className = '',
  marks = undefined,
  id = '',
  onInputChange = () => {},
  width = '100%',
  style = {}
}): JSX.Element => {
  const [inputMinValue, setInputMinValue] = useState<number>(value.min);
  const [inputMaxValue, setInputMaxValue] = useState<number>(value.max);

  const inputMinChangeHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      const newMinValue = Math.min(+event.currentTarget.value, inputMaxValue - step);
      setInputMinValue(newMinValue);
      onInputChange({ min: newMinValue, max: inputMaxValue });
    },
    [setInputMinValue, onInputChange, inputMaxValue, step, max]
  );

  const inputMaxChangeHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      const newMaxValue = Math.max(+event.currentTarget.value, inputMinValue + step);
      setInputMaxValue(newMaxValue);
      onInputChange({ min: inputMinValue, max: newMaxValue });
    },
    [setInputMinValue, onInputChange, inputMinValue, step, min]
  );

  const minPosition = calculateAbsolutePostionPercentage(inputMinValue, min, max);
  const maxPosition = calculateAbsolutePostionPercentage(inputMaxValue, min, max);

  const valueBoxMinAdjustment = calculateOffsetAdjustment(
    inputMinValue,
    min,
    max,
    offsetAdjustmentValues.rangeValueBox[size]
  );
  const valueBoxMaxAdjustment = calculateOffsetAdjustment(
    inputMaxValue,
    min,
    max,
    offsetAdjustmentValues.rangeValueBox[size]
  );

  const controlMinAdjustment = calculateOffsetAdjustment(
    inputMinValue,
    min,
    max,
    offsetAdjustmentValues.rangeControl[size]
  );
  const controlMaxAdjustment = calculateOffsetAdjustment(
    inputMaxValue,
    min,
    max,
    offsetAdjustmentValues.rangeControl[size]
  );

  useEffect(() => {
    setInputMinValue(value.min);
    setInputMaxValue(value.max);
  }, [value.min, value.max]);

  return (
    <Styled.RangeSliderRoot className={className} style={style} width={width}>
      <Styled.RangeSliderInputWrapper size={size}>
        <Styled.RangeSiderInput
          /* @ts-ignore */
          value={inputMinValue}
          /* @ts-ignore */
          size={size}
          color={color}
          position={'min'}
          data-testid="jds-range-slider-min"
          data-thumbwidth={20}
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          onChange={inputMinChangeHandler}
        />
        <Styled.RangeSiderInput
          /* @ts-ignore */
          value={inputMaxValue}
          /* @ts-ignore */
          size={size}
          color={color}
          position={'max'}
          data-testid="jds-range-slider-max"
          data-thumbwidth={20}
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          onChange={inputMaxChangeHandler}
        />
        {displayValue && (
          <Styled.RangedSliderSelectorWrapper>
            <Styled.RangeSliderSelector>
              <Styled.RangeSliderValueBox
                data-box-id={`valueBoxMin`}
                style={{
                  left: `calc(${minPosition}% + ${valueBoxMinAdjustment}px)`
                }}
              >
                <Typography variant="label">{inputMinValue}</Typography>
              </Styled.RangeSliderValueBox>
              <Styled.RangeSliderValueBox
                data-box-id={`valueBoxMax`}
                style={{
                  left: `calc(${maxPosition}% + ${valueBoxMaxAdjustment}px)`
                }}
              >
                <Typography variant="label">{inputMaxValue}</Typography>
              </Styled.RangeSliderValueBox>
            </Styled.RangeSliderSelector>
          </Styled.RangedSliderSelectorWrapper>
        )}
      </Styled.RangeSliderInputWrapper>
      <Styled.RangeSliderControlWrapper size={size}>
        <Styled.RangeSliderControl
          size={size}
          color={color}
          data-control-id={`controlMin`}
          style={{ left: `calc(${minPosition}% - ${controlMinAdjustment}px)` }}
        />
        <Styled.RangeSliderTrack size={size} color={color}>
          <Styled.RangeSliderInnerTrack style={{ left: `${minPosition}%`, right: `${100 - maxPosition}%` }} />
        </Styled.RangeSliderTrack>
        <Styled.RangeSliderControl
          size={size}
          color={color}
          data-control-id={`controlMax`}
          style={{ left: `calc(${maxPosition}% - ${controlMaxAdjustment}px)` }}
        />
      </Styled.RangeSliderControlWrapper>
      {marks && <SliderMarks marks={marks} min={min} max={max} size={size} />}
    </Styled.RangeSliderRoot>
  );
};

RangeSlider.displayName = 'RangeSlider';
export default RangeSlider;
