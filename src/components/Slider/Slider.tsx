import React, { useCallback, useEffect, useState } from 'react';
import type { SliderClassKey, SliderSize } from './types';
import type { Position, ThemeColorVariants } from 'core/types';
import { mergeClasses } from 'core/utils';
import { useForwardedRef } from 'core/hooks';
import type { Classes } from 'jss';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import { Typography } from 'components/Typography';
import type { SliderMarksDefinition } from './SliderMarks/types';
import { SliderMarks } from './SliderMarks';
import { calculateAbsolutePostionPercentage, calculateOffsetAdjustment, offsetAdjustmentValues } from './utils';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  color?: ThemeColorVariants;
  value?: number;
  size?: SliderSize;
  width?: string | number;
  marks?: SliderMarksDefinition;
  id?: string;
  displayValue?: boolean;
  style?: React.CSSProperties;
  className?: string;
  classes?: Classes<SliderClassKey>;
  onChange?: (value: number) => void;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      defaultValue = 50,
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
    },
    ref
  ) => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);
    const [inputValue, setInputValue] = useState<number>(value);

    const classNames = mergeClasses(useStyles({ color, width }), classes);

    const inputChangeHandler = useCallback(
      (event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(+event.currentTarget.value);
        onChange(+event.currentTarget.value);
      },
      [setInputValue, onChange]
    );

    const minPosition = calculateAbsolutePostionPercentage(inputValue, min, max);
    const valueBoxMinAdjustment = calculateOffsetAdjustment(
      inputValue,
      min,
      max,
      offsetAdjustmentValues.standardValueBox[size]
    );

    const getStyles = (): React.CSSProperties => ({
      ...style,
      backgroundSize: `${minPosition}% 100%`
    });

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    return (
      <div className={clsx(classNames.root, className)}>
        <input
          data-thumbwidth={20}
          ref={inputRef}
          className={clsx(classNames.input, classNames[size])}
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          value={inputValue}
          style={getStyles()}
          onInput={inputChangeHandler}
        />
        {displayValue && (
          <div className={classNames.selector}>
            <div className={classNames.selectorWrapper}>
              <div
                className={classNames.valueBox}
                style={{
                  left: `calc(${minPosition}% + ${valueBoxMinAdjustment}px)`
                }}
              >
                <Typography variant="label">{inputValue}</Typography>
              </div>
            </div>
          </div>
        )}
        {marks && <SliderMarks marks={marks} min={min} max={max} size={size} />}
      </div>
    );
  }
);

Slider.displayName = 'Slider';
export default Slider;
