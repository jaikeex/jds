import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import type { TextFieldProps } from './TextField';
import TextField from './TextField';

const renderComponent = (props: Partial<TextFieldProps> = {}) => {
  const defaultProps: TextFieldProps = {
    appearance: 'outlined',
    color: 'primary',
    onChange: () => {}
  };

  const mergedProps = { ...defaultProps, ...props };

  render(<TextField {...mergedProps} />);
};

describe('TextField', () => {
  it('should render the component with default props', () => {
    renderComponent();
    expect(screen.getByTestId('jds-textfield')).toBeInTheDocument();
  });

  it('should render the component with a label', () => {
    renderComponent({ label: 'Test Label' });
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should render the component with a placeholder', () => {
    renderComponent({ placeholder: 'Test Placeholder' });
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  it('should call onChange when input value is changed', () => {
    const handleChange = vi.fn();
    renderComponent({ onChange: handleChange });
    fireEvent.change(screen.getByTestId('jds-textfield'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('should call onFocus when the input is focused', () => {
    const handleFocus = vi.fn();
    renderComponent({ onFocus: handleFocus });
    fireEvent.focus(screen.getByTestId('jds-textfield'));
    expect(handleFocus).toHaveBeenCalled();
  });

  it('should call onBlur when the input loses focus', () => {
    const handleBlur = vi.fn();
    renderComponent({ onBlur: handleBlur });
    fireEvent.blur(screen.getByTestId('jds-textfield'));
    expect(handleBlur).toHaveBeenCalled();
  });

  it('should render the component as disabled when the disabled prop is true', () => {
    renderComponent({ disabled: true });
    expect(screen.getByTestId('jds-textfield')).toBeDisabled();
  });

  it('should render the component as readOnly when the readOnly prop is true', () => {
    renderComponent({ readOnly: true });
    expect(screen.getByTestId('jds-textfield')).toHaveAttribute('readonly');
  });

  it('should render the component as required when the required prop is true', () => {
    renderComponent({ required: true });
    expect(screen.getByTestId('jds-textfield')).toBeRequired();
  });

  it('should render the component with elementBefore', () => {
    const elementBefore = <div data-testid="elementBefore">Before</div>;
    renderComponent({ elementBefore });
    expect(screen.getByTestId('elementBefore')).toBeInTheDocument();
  });

  it('should render the component with elementAfter', () => {
    const elementAfter = <div data-testid="elementAfter">After</div>;
    renderComponent({ elementAfter });
    expect(screen.getByTestId('elementAfter')).toBeInTheDocument();
  });
});
