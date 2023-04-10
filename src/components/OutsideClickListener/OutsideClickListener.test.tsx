import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import type { OutsideClickListenerProps } from './OutsideClickListener';
import OutsideClickListener from './OutsideClickListener';

const renderComponent = (props: Partial<OutsideClickListenerProps> = {}) =>
  render(
    <div>
      <OutsideClickListener {...props}>
        <div data-testid="inside">Inside content</div>
      </OutsideClickListener>
      <div data-testid="outside">Outside content</div>
    </div>
  );

describe('OutsideClickListener', () => {
  it('should call onOutsideClick when clicked outside of its children', () => {
    const onOutsideClick = vi.fn();
    renderComponent({ onOutsideClick });
    const outsideElement = screen.getByTestId('outside');
    fireEvent.mouseDown(outsideElement);
    expect(onOutsideClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onOutsideClick when clicked inside its children', () => {
    const onOutsideClick = vi.fn();
    renderComponent({ onOutsideClick });
    const insideElement = screen.getByTestId('inside');
    fireEvent.mouseDown(insideElement);
    expect(onOutsideClick).toHaveBeenCalledTimes(0);
  });
});
