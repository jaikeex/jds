import React from 'react';
import { fireEvent, render, screen } from 'test-utils';
import type { ToggleButtonProps } from './ToggleButton';
import ToggleButton from './ToggleButton';

const renderComponent = (props?: Partial<ToggleButtonProps>) => {
  const defaultProps: ToggleButtonProps = {
    children: 'Test Button'
  };

  const mergedProps: ToggleButtonProps = {
    ...defaultProps,
    ...props
  };

  render(<ToggleButton {...mergedProps} />);
};

describe('ToggleButton', () => {
  it('should render the component with the provided children', () => {
    renderComponent();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('should render the component with the provided class name', () => {
    renderComponent({ className: 'custom-class' });
    expect(screen.getByTestId('jds-togglebutton')).toHaveClass('custom-class');
  });

  it('should handle clicks correctly', () => {
    const onClick = vi.fn();
    renderComponent({ onClick });

    fireEvent.click(screen.getByTestId('jds-togglebutton'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should call onChange with the correct values', () => {
    const onChange = vi.fn();
    renderComponent({ value: 'testValue', onChange });

    fireEvent.click(screen.getByTestId('jds-togglebutton'));
    expect(onChange).toHaveBeenCalledWith(true, 'testValue');
  });

  it('should disable the button correctly', () => {
    renderComponent({ disabled: true });

    expect(screen.getByTestId('jds-togglebutton')).toBeDisabled();
  });
});
