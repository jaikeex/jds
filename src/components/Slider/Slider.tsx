import React, { useEffect, useRef, useState } from 'react';
import './Slider.styles.scss';
import classNames from 'classnames';
import { useOffset } from './useOffset';
import { SliderSize } from './types';
import { Position } from '@core/types';
import { classNameSize } from '@core/utils';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  size?: SliderSize;
  width?: number;
  label?: string;
  labelPosition?: Exclude<
    Position,
    'right-start' | 'right-end' | 'left-start' | 'left-end'
  >;
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  displayValue?: boolean;
  styles?: React.CSSProperties;
  className?: string;
  onChange?: React.FormEventHandler<HTMLInputElement>;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value = defaultValue,
  size = 'medium',
  displayValue = true,
  className = '',
  label = '',
  labelPosition = 'bottom-start',
  id = '',
  inputRef,
  onChange = () => {},
  width,
  styles
}) => {
  const ref = inputRef || useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<number>(defaultValue);
  const [selectorOffset, valueBoxOffset] = useOffset(ref);

  const classes = classNames(
    'jds-slider',
    classNameSize('jds-slider', size),
    className
  );
  const labelClasses = classNames(
    'jds-slider__label',
    `jds-slider__label--pos--${labelPosition}`
  );

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(+event.currentTarget.value);
    onChange(event);
  };

  const getStyles = (): React.CSSProperties => {
    return {
      ...styles,
      backgroundSize: `${selectorOffset}% 100%`
    };
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className={classes} style={{ width: width ? `${width}px` : '100%' }}>
      <input
        data-thumbWidth={20}
        ref={ref}
        className="jds-slider__input"
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={inputValue}
        defaultValue={defaultValue}
        style={getStyles()}
        onInput={inputChangeHandler}
      />
      {displayValue && (
        <div className="jds-slider__selector">
          <div className="jds-slider__selector-cont">
            <div
              className="jds-slider__value-box"
              style={{
                left: `calc(
                ${selectorOffset}% +  
              ${valueBoxOffset}px)`
              }}
            >
              {inputValue}
            </div>
          </div>
        </div>
      )}
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Slider;