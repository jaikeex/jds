import React, { useCallback, useEffect, useState } from 'react';
import type { Size, ThemeColorVariants } from 'core/types';
import { useForwardedRef } from 'core/hooks';
import { Typography } from 'components/Typography';
import type { SliderMarksDefinition } from './SliderMarks/types';
import { SliderMarks } from './SliderMarks';
import { calculateAbsolutePostionPercentage, calculateOffsetAdjustment, offsetAdjustmentValues } from './utils';
import * as Styled from './styles';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  color?: ThemeColorVariants;
  value?: number;
  size?: Size;
  width?: string | number;
  marks?: SliderMarksDefinition;
  id?: string;
  displayValue?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onInputChange?: (value: number) => void;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      defaultValue = 50,
      color = 'primary',
      value = undefined,
      size = 'medium',
      displayValue = true,
      className = '',
      marks = undefined,
      id = '',
      onInputChange = () => {},
      width = '100%',
      style = {}
    },
    ref
  ) => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);
    const [inputValue, setInputValue] = useState<number>(defaultValue);

    const inputChangeHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (value === undefined) {
          setInputValue(+event.currentTarget.value);
        }
        onInputChange(+event.currentTarget.value);
      },
      [setInputValue, onInputChange]
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
      if (value !== undefined) {
        setInputValue(value);
      }
    }, [value]);

    return (
      <Styled.SliderRoot className={className} width={width}>
        <Styled.SliderInput
          /* @ts-ignore */
          size={size}
          onChange={inputChangeHandler}
          color={color}
          data-thumbwidth={20}
          ref={inputRef}
          data-testid="jds-slider"
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          value={inputValue}
          style={getStyles()}
        />
        {displayValue && (
          <Styled.SliderSelectorWrapper>
            <Styled.SliderSelector>
              <Styled.SliderValueBox
                data-box-id="valueBox"
                style={{
                  left: `calc(${minPosition}% + ${valueBoxMinAdjustment}px)`
                }}
              >
                <Typography variant="label">{inputValue}</Typography>
              </Styled.SliderValueBox>
            </Styled.SliderSelector>
          </Styled.SliderSelectorWrapper>
        )}
        {marks && <SliderMarks marks={marks} min={min} max={max} size={size} />}
      </Styled.SliderRoot>
    );
  }
);

Slider.displayName = 'Slider';
export default Slider;
