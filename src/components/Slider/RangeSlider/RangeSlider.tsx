import React, { useCallback, useEffect, useState } from 'react';
import type { RangeSliderClassKey, RangeSliderSize, RangeSliderValue } from './types';
import type { Position, ThemeColorVariants } from 'core/types';
import { mergeClasses } from 'core/utils';
import type { Classes } from 'jss';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import { Typography } from 'components/Typography';
import type { SliderMarksDefinition } from 'components/Slider/SliderMarks/types';
import { SliderMarks } from 'components/Slider/SliderMarks';
import {
  offsetAdjustmentValues,
  calculateAbsolutePostionPercentage,
  calculateOffsetAdjustment
} from 'components/Slider/utils';

export interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: RangeSliderValue;
  color?: ThemeColorVariants;
  value?: RangeSliderValue;
  size?: RangeSliderSize;
  width?: string | number;
  marks?: SliderMarksDefinition;
  id?: string;
  displayValue?: boolean;
  style?: React.CSSProperties;
  className?: string;
  classes?: Classes<RangeSliderClassKey>;
  onChange?: (value: RangeSliderValue) => void;
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
  classes = {},
  marks = undefined,
  id = '',
  onChange = () => {},
  width = '100%',
  style = {}
}): JSX.Element => {
  const [inputMinValue, setInputMinValue] = useState<number>(value.min);
  const [inputMaxValue, setInputMaxValue] = useState<number>(value.max);

  const classNames = mergeClasses(useStyles({ color, width }), classes);

  const inputMinChangeHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      const newMinValue = Math.min(+event.currentTarget.value, inputMaxValue - step);
      setInputMinValue(newMinValue);
      onChange({ min: newMinValue, max: inputMaxValue });
    },
    [setInputMinValue, onChange, inputMaxValue, step, max]
  );

  const inputMaxChangeHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      const newMaxValue = Math.max(+event.currentTarget.value, inputMinValue + step);
      setInputMaxValue(newMaxValue);
      onChange({ min: inputMinValue, max: newMaxValue });
    },
    [setInputMinValue, onChange, inputMinValue, step, min]
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
    <div className={clsx(classNames.root, classNames[size], className)} style={style}>
      <div className={classNames.inputWrapper}>
        <input
          data-thumbwidth={20}
          className={clsx(classNames.input, classNames.inputMin)}
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          value={inputMinValue}
          onInput={inputMinChangeHandler}
        />
        <input
          data-thumbwidth={20}
          className={clsx(classNames.input, classNames.inputMax)}
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          value={inputMaxValue}
          onInput={inputMaxChangeHandler}
        />
        {displayValue && (
          <div className={classNames.selector}>
            <div className={classNames.selectorWrapper}>
              <div
                className={classNames.valueBox}
                id={`${id}-valueBoxMin`}
                style={{
                  left: `calc(${minPosition}% + ${valueBoxMinAdjustment}px)`
                }}
              >
                <Typography variant="label">{inputMinValue}</Typography>
              </div>
              <div
                className={classNames.valueBox}
                id={`${id}-valueBoxMax`}
                style={{
                  left: `calc(${maxPosition}% + ${valueBoxMaxAdjustment}px)`
                }}
              >
                <Typography variant="label">{inputMaxValue}</Typography>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={classNames.controlWrapper}>
        <div
          className={classNames.control}
          id={`${id}-controlMin`}
          style={{ left: `calc(${minPosition}% - ${controlMinAdjustment}px)` }}
        />
        <div className={classNames.track}>
          <div className={classNames.innerTrack} style={{ left: `${minPosition}%`, right: `${100 - maxPosition}%` }} />
        </div>
        <div
          className={classNames.control}
          id={`${id}-controlMax`}
          style={{ left: `calc(${maxPosition}% - ${controlMaxAdjustment}px)` }}
        />
      </div>
      {marks && <SliderMarks marks={marks} min={min} max={max} size={size} />}
    </div>
  );
};

RangeSlider.displayName = 'RangeSlider';
export default RangeSlider;
