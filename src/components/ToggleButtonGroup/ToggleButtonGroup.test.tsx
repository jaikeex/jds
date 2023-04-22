import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import ToggleButtonGroup from './ToggleButtonGroup';
import { ToggleButton } from 'components/ToggleButton';
import type { ToggleButtonGroupProps } from './ToggleButtonGroup';

const renderComponent = (props: Partial<ToggleButtonGroupProps> = {}) => {
  const defaultProps: ToggleButtonGroupProps = {};

  const mergedProps = { ...defaultProps, ...props };

  render(
    <ToggleButtonGroup {...mergedProps}>
      <ToggleButton value="first">First</ToggleButton>
      <ToggleButton value="second">Second</ToggleButton>
      <ToggleButton value="third">Third</ToggleButton>
    </ToggleButtonGroup>
  );
};

describe('ToggleButtonGroup', () => {
  it('should render ToggleButtonGroup with 3 ToggleButton children', () => {
    renderComponent();
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('should call the valueChangeHandler when a ToggleButton is clicked', () => {
    const valueChangeHandler = vi.fn();
    renderComponent({ onChange: valueChangeHandler });
    fireEvent.click(screen.getByText('First'));
    expect(valueChangeHandler).toHaveBeenCalledTimes(1);
  });

  it('should select a ToggleButton when clicked', () => {
    const valueChangeHandler = vi.fn();
    renderComponent({ onChange: valueChangeHandler });

    fireEvent.click(screen.getByText('First'));
    expect(screen.getByTestId('jds-toggle-button-group')).toHaveTextContent('First');
    expect(valueChangeHandler).toHaveBeenCalledWith(expect.anything(), ['first']);
  });

  it('should allow multiple selections by default', () => {
    const valueChangeHandler = vi.fn();
    renderComponent({ onChange: valueChangeHandler });

    fireEvent.click(screen.getByText('First'));
    fireEvent.click(screen.getByText('Second'));
    expect(valueChangeHandler).toHaveBeenCalledTimes(2);
    expect(valueChangeHandler).toHaveBeenLastCalledWith(expect.anything(), ['first', 'second']);
  });

  it('should deselect a ToggleButton when clicked again (non-exclusive)', () => {
    const valueChangeHandler = vi.fn();
    renderComponent({ onChange: valueChangeHandler });

    fireEvent.click(screen.getByText('First'));
    fireEvent.click(screen.getByText('First'));
    expect(valueChangeHandler).toHaveBeenCalledTimes(2);
    expect(valueChangeHandler).toHaveBeenLastCalledWith(expect.anything(), []);
  });

  it('should only allow one selection when exclusive', () => {
    const valueChangeHandler = vi.fn();
    renderComponent({ onChange: valueChangeHandler, exclusive: true });

    fireEvent.click(screen.getByText('First'));
    fireEvent.click(screen.getByText('Second'));
    expect(valueChangeHandler).toHaveBeenCalledTimes(2);
    expect(valueChangeHandler).toHaveBeenLastCalledWith(expect.anything(), 'second');
  });

  it('should not allow deselection when exclusive', () => {
    const valueChangeHandler = vi.fn();
    renderComponent({ onChange: valueChangeHandler, exclusive: true });

    fireEvent.click(screen.getByText('First'));
    fireEvent.click(screen.getByText('First'));
    expect(valueChangeHandler).toHaveBeenCalledTimes(2);
    expect(valueChangeHandler).toHaveBeenLastCalledWith(expect.anything(), 'first');
  });
});
