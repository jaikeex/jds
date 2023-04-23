import React from 'react';
import { render, fireEvent } from 'test-utils';
import type { RangeSliderProps } from './RangeSlider';
import RangeSlider from './RangeSlider';

const defaultProps: RangeSliderProps = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: { min: 25, max: 75 },
  color: 'primary',
  displayValue: true
};

describe('RangeSlider Component', () => {
  it('should update the min value when the min slider is changed', () => {
    const handleInputChange = vi.fn();
    const { getByTestId } = render(<RangeSlider {...defaultProps} onInputChange={handleInputChange} />);
    const minSlider = getByTestId('jds-range-slider-min');

    fireEvent.change(minSlider, { target: { value: '30' } });

    expect(handleInputChange).toHaveBeenCalledWith({ min: 30, max: 75 });
  });

  it('should update the max value when the max slider is changed', () => {
    const handleInputChange = vi.fn();
    const { getByTestId } = render(<RangeSlider {...defaultProps} onInputChange={handleInputChange} />);
    const maxSlider = getByTestId('jds-range-slider-max');

    fireEvent.change(maxSlider, { target: { value: '70' } });

    expect(handleInputChange).toHaveBeenCalledWith({ min: 25, max: 70 });
  });

  it('should not allow the min value to be greater than the max value', () => {
    const handleInputChange = vi.fn();
    const { getByTestId } = render(<RangeSlider {...defaultProps} onInputChange={handleInputChange} />);
    const minSlider = getByTestId('jds-range-slider-min');

    fireEvent.change(minSlider, { target: { value: '80' } });

    expect(handleInputChange).toHaveBeenCalledWith({ min: 74, max: 75 });
  });

  it('should not allow the max value to be less than the min value', () => {
    const handleInputChange = vi.fn();
    const { getByTestId } = render(<RangeSlider {...defaultProps} onInputChange={handleInputChange} />);
    const maxSlider = getByTestId('jds-range-slider-max');

    fireEvent.change(maxSlider, { target: { value: '20' } });

    expect(handleInputChange).toHaveBeenCalledWith({ min: 25, max: 26 });
  });

  it('should render SliderMarks when marks are provided', () => {
    const marks = [
      { value: 0, label: '0' },
      { value: 50, label: '50' },
      { value: 100, label: '100' }
    ];

    const { getByText } = render(<RangeSlider {...defaultProps} marks={marks} />);

    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('50')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();
  });
});
