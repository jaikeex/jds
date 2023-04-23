import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import '@testing-library/jest-dom';
import Slider from './Slider';

describe('Slider component', () => {
  it('should render without crashing', () => {
    render(<Slider />);
    const slider = screen.getByTestId('jds-slider');
    expect(slider).toBeInTheDocument();
  });

  it('should display default value on mount', () => {
    render(<Slider defaultValue={30} displayValue />);
    const valueBox = screen.getByText('30');
    expect(valueBox).toBeInTheDocument();
  });

  it('should call onChange with the updated value when changed', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} onInputChange={handleChange} />);
    const slider = screen.getByTestId('jds-slider');
    fireEvent.change(slider, { target: { value: 70 } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(70);
  });

  it('should render with custom min and max values', () => {
    render(<Slider min={10} max={50} />);
    const slider = screen.getByTestId('jds-slider');
    expect(slider).toHaveAttribute('min', '10');
    expect(slider).toHaveAttribute('max', '50');
  });

  it('should render with custom step value', () => {
    render(<Slider step={5} />);
    const slider = screen.getByTestId('jds-slider');
    expect(slider).toHaveAttribute('step', '5');
  });

  it('should handle controlled value updates correctly', () => {
    const { rerender } = render(<Slider value={40} />);
    const slider = screen.getByTestId('jds-slider');
    expect(slider).toHaveAttribute('value', '40');

    rerender(<Slider value={60} />);
    expect(slider).toHaveAttribute('value', '60');
  });

  it('should render SliderMarks when the marks prop is provided', () => {
    const marks = [
      { value: 0, label: '0' },
      { value: 70, label: '70' },
      { value: 100, label: '100' }
    ];
    render(<Slider marks={marks} />);
    marks.forEach((mark) => {
      const markLabel = screen.getByText(mark.label);
      expect(markLabel).toBeInTheDocument();
    });
  });
});
