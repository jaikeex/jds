import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import type { RadioGroupProps } from './RadioGroup';
import RadioGroup from './RadioGroup';
import { Radio } from 'components/Radio';

const renderComponent = (props: Partial<RadioGroupProps> = {}) => {
  render(
    <RadioGroup {...props}>
      <Radio data-testid="jds-radio" label="First" value="first" />
      <Radio data-testid="jds-radio" label="Second" value="second" />
      <Radio data-testid="jds-radio" label="Third" value="third" />
      <Radio data-testid="jds-radio" label="Disabled" value="disabled" disabled />
    </RadioGroup>
  );
};

describe('RadioGroup', () => {
  it('should render without crashing', () => {
    renderComponent();
    expect(screen.getByTestId('jds-radio-group')).toBeInTheDocument();
  });

  it('should render radio buttons passed as children', () => {
    renderComponent();
    expect(screen.getAllByTestId('jds-radio').length).toBe(4);
  });

  it('should be initially checked if defaultValue is set', () => {
    renderComponent({ defaultValue: 'second' });
    const secondRadio = screen.getByLabelText('Second');
    expect(secondRadio).toBeChecked();
  });

  it('should change state when clicked', () => {
    renderComponent();
    fireEvent.click(screen.getByLabelText('Third'));
    expect(screen.getByLabelText('Third')).toBeChecked();
  });

  it('should call onChange when clicked', () => {
    const onChange = vi.fn();
    renderComponent({ onChange });
    fireEvent.click(screen.getByLabelText('First'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should apply orientation style according to orientation prop', () => {
    renderComponent({ orientation: 'horizontal' });
    const radioGroup = screen.getByTestId('jds-radio-group');
    expect(radioGroup).toHaveStyle({ flexDirection: 'row' });
  });

  it('should set disabled state for all radio buttons when disabled prop is set', () => {
    renderComponent({ disabled: true });
    screen.getAllByTestId('jds-radio').forEach((radio) => {
      expect(radio).toBeDisabled();
    });
  });
});
