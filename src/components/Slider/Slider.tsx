import React, { useCallback, useEffect, useState } from 'react';
import { useOffset } from './useOffset';
import type { SliderClassKey, SliderSize } from './types';
import type { Position, ThemeColorVariants } from 'core/types';
import { mergeClasses } from 'core/utils';
import { useForwardedRef } from 'core/hooks';
import type { Classes } from 'jss';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import { Typography } from 'components/Typography';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  color?: ThemeColorVariants;
  value?: number;
  size?: SliderSize;
  width?: string | number;
  label?: string;
  labelPosition?: Exclude<Position, 'right-start' | 'right-end' | 'left-start' | 'left-end'>;
  id?: string;
  displayValue?: boolean;
  style?: React.CSSProperties;
  className?: string;
  classes?: Classes<SliderClassKey>;
  onChange?: React.FormEventHandler<HTMLInputElement>;
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
      label = '',
      labelPosition = 'bottom-start',
      id = '',
      onChange = () => {},
      width = '100%',
      style = {}
    },
    ref
  ) => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);
    const [inputValue, setInputValue] = useState<number>(value);
    //const [selectorOffset, valueBoxOffset] = useOffset(inputRef);

    const classNames = mergeClasses(useStyles({ color, width }), classes);

    const inputChangeHandler = useCallback(
      (event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(+event.currentTarget.value);
        onChange(event);
      },
      [setInputValue, onChange]
    );

    const fract = (Number(inputValue) - min) / (max - min);
    const percentLeft = fract * 100;
    const fractFromCentre = (fract - 0.5) * 2;
    const adjustment = fractFromCentre * 15;

    const getStyles = (): React.CSSProperties => ({
      ...style,
      backgroundSize: `${percentLeft}% 100%`
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
                  left: `calc(${percentLeft}% + ${adjustment}px)`
                }}
              >
                <Typography variant="label">{inputValue}</Typography>
              </div>
            </div>
          </div>
        )}
        {label && (
          <label className={classNames.label} htmlFor={id}>
            <Typography variant="label">{label}</Typography>
          </label>
        )}
      </div>
    );
  }
);

Slider.displayName = 'Slider';
export default Slider;
