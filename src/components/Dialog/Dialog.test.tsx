import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import type { DialogProps } from './Dialog';
import Dialog from './Dialog';

const renderComponent = (props: Partial<DialogProps> = {}) => render(<Dialog {...props}>Test content</Dialog>);

describe('Dialog', () => {
  it('should not render by default', () => {
    renderComponent();
    const dialog = screen.queryByTestId('jds-dialog');
    expect(dialog).not.toBeInTheDocument();
  });

  it('should render when open prop is true', () => {
    renderComponent({ open: true });
    const dialog = screen.getByTestId('jds-dialog');
    expect(dialog).toBeInTheDocument();
  });

  it('should call onClose when the Escape key is pressed', () => {
    const onClose = vi.fn();
    renderComponent({ open: true, onClose });
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should not call onClose when disableEscapeKeyClose is true and the Escape key is pressed', () => {
    const onClose = vi.fn();
    renderComponent({ open: true, disableEscapeKeyClose: true, onClose });
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
