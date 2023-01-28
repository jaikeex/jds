import React, { useEffect, useReducer, useRef, useState } from 'react';
import './styles.scss';
import classNames from 'classnames';
import { useOffset } from './useOffset';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  size?: 'small' | 'medium' | 'large';
  width?: number;
  label?: string;
  id?: string;
  displayValue?: boolean;
  styles?: React.CSSProperties;
  className?: string;
  onChange?: React.FormEventHandler<HTMLInputElement>;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  size = 'medium',
  displayValue = true,
  className = '',
  label = '',
  id = '',
  width,
  styles
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<number>(value);
  const [selectorOffset, valueBoxOffset] = useOffset(inputRef);

  const classes = classNames('jds-slider', `jds-slider--${size}`, className);

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(+event.currentTarget.value);
  };

  const getStyles = (): React.CSSProperties => {
    return {
      ...styles,
      backgroundSize: `${selectorOffset}% 100%`
    };
  };

  return (
    <div className={classes} style={{ width: width ? `${width}px` : '100%' }}>
      <input
        data-thumbWidth={20}
        ref={inputRef}
        className="jds-slider__input"
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
        <label className="jds-slider__label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Slider;
