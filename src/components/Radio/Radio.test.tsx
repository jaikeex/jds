import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import type { RadioProps } from './Radio';
import Radio from './Radio';

const defaultProps: RadioProps = {
  value: 'test'
};

const renderComponent = (props: Partial<RadioProps> = {}) => {
  const newProps: RadioProps = { ...defaultProps, ...props };
  render(<Radio data-testid="jds-radio" {...newProps} />);
};

describe('Radio', () => {
  it('should render without crashing', () => {
    renderComponent();
    expect(screen.getByTestId('jds-radio')).toBeInTheDocument();
  });

  it('should render a label if provided', () => {
    renderComponent({ label: 'Test Label' });
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should be initially checked if defaultChecked is set', () => {
    renderComponent({ defaultChecked: true });
    expect(screen.getByTestId('jds-radio')).toBeChecked();
  });

  it('should change state when clicked', () => {
    renderComponent({ defaultChecked: false });
    fireEvent.click(screen.getByTestId('jds-radio'));
    expect(screen.getByTestId('jds-radio')).toBeChecked();
  });

  it('should call onChange when clicked', () => {
    const onChange = vi.fn();
    renderComponent({ onChange });
    fireEvent.click(screen.getByTestId('jds-radio'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should be disabled if disabled prop is set', () => {
    renderComponent({ disabled: true });
    expect(screen.getByTestId('jds-radio')).toBeDisabled();
  });
});
