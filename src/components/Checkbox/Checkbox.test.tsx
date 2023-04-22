import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import type { CheckboxProps } from './Checkbox';
import Checkbox from './Checkbox';

const renderComponent = (props: Partial<CheckboxProps> = {}) => {
  const defaultProps: CheckboxProps = {
    label: 'Test Checkbox'
  };

  const mergedProps = { ...defaultProps, ...props };

  render(<Checkbox {...mergedProps} />);
};

describe('Checkbox', () => {
  it('renders label', () => {
    renderComponent();
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('renders defaultChecked state', () => {
    renderComponent({ defaultChecked: true });
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('toggles checked state on click', () => {
    renderComponent();
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('calls onChange when clicked', () => {
    const onChange = vi.fn();
    renderComponent({ onChange });
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('displays indeterminate state when indeterminate prop is true', () => {
    renderComponent({ indeterminate: true });
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveProperty('indeterminate', true);
  });

  it('does not toggle when disabled', () => {
    renderComponent({ disabled: true });
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
