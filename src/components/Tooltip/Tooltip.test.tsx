import React from 'react';
import { render, fireEvent, screen, act } from 'test-utils';
import type { TooltipProps } from './Tooltip';
import Tooltip from './Tooltip';
import { Button } from 'components/Button';

const renderComponent = (props: Partial<TooltipProps> = {}) => {
  const defaultProps: TooltipProps = {
    content: 'Tooltip'
  };

  const mergedProps = { ...defaultProps, ...props };

  render(
    <Tooltip {...mergedProps}>
      <Button>show tooltip</Button>
    </Tooltip>
  );
};

describe('Tooltip', () => {
  it('should show the tooltip on mouse over', async () => {
    renderComponent();
    fireEvent.mouseEnter(screen.getByTestId('jds-button'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    expect(screen.getByText('Tooltip')).toBeInTheDocument();
  });

  it('should hide the tooltip on mouse leave', async () => {
    renderComponent();

    fireEvent.mouseEnter(screen.getByTestId('jds-button'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    fireEvent.mouseLeave(screen.getByTestId('jds-button'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    expect(screen.queryByText('Tooltip')).not.toBeInTheDocument();
  });

  it('should support custom tooltip position', async () => {
    renderComponent({ position: 'left-start' });

    fireEvent.mouseEnter(screen.getByTestId('jds-button'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    expect(screen.getByText('Tooltip')).toHaveAttribute('data-popper-placement', 'left-start');
  });
});
