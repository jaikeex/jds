import React from 'react';
import { render, fireEvent } from 'test-utils';
import Button from './Button';
import type { ButtonProps } from './Button';

describe('Button component', () => {
  const defaultProps: ButtonProps = {
    appearance: 'filled',
    color: 'primary',
    size: 'medium'
  };

  function renderButton(props: Partial<ButtonProps> = {}) {
    return render(<Button {...defaultProps} {...props} />);
  }

  it('should render the button with default props', () => {
    const { getByRole } = renderButton();
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should call onClick when the button is clicked', () => {
    const onClick = vi.fn();
    const { getByRole } = renderButton({ onClick });
    const button = getByRole('button');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('should not call onClick when the button is disabled', () => {
    const onClick = vi.fn();
    const { getByRole } = renderButton({ disabled: true, onClick });
    const button = getByRole('button');

    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should render icons when provided', () => {
    const iconLeft = <svg data-testid="icon-left" />;
    const iconRight = <svg data-testid="icon-right" />;
    const { getByTestId } = renderButton({ iconLeft, iconRight });

    const leftIcon = getByTestId('icon-left');
    const rightIcon = getByTestId('icon-right');

    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();
  });
});
