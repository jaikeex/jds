import React from 'react';
import { render, screen } from 'test-utils';
import type { ButtonGroupProps } from './ButtonGroup';
import ButtonGroup from './ButtonGroup';
import type { ButtonProps } from 'components/Button';
import { Button } from 'components/Button';

const renderComponent = (props: Partial<ButtonGroupProps> = {}) => render(
    <ButtonGroup {...props}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup>
  );

describe('ButtonGroup', () => {
  it('should render two buttons within the group', () => {
    renderComponent();
    const buttons = screen.getAllByTestId('jds-button');
    expect(buttons.length).toBe(2);
  });

  it('should pass the specified color and disabled props to the child buttons', () => {
    const customProps: ButtonGroupProps = {
      color: 'secondary',
      disabled: true
    };
    renderComponent(customProps);
    const buttons = screen.getAllByTestId('jds-button');
    buttons.forEach((button) => {
      expect(button).toHaveAttribute('color', customProps.color);
      expect(button).toHaveAttribute('disabled');
    });
  });

  it('should not override individual child button props if provided', () => {
    const buttonGroupProps: ButtonGroupProps = {
      color: 'secondary',
      disabled: true
    };

    const customButtonProps: ButtonProps = {
      color: 'primary',
      disabled: false
    };

    const { container } = render(
      <ButtonGroup {...buttonGroupProps}>
        <Button {...customButtonProps}>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );

    const buttons = container.querySelectorAll('[data-testid="jds-button"]');
    const [button1, button2] = buttons;

    expect(button1).toHaveAttribute('color', customButtonProps.color);
    expect(button1).not.toHaveAttribute('disabled');

    expect(button2).toHaveAttribute('color', buttonGroupProps.color);
    expect(button2).toHaveAttribute('disabled');
  });
});
