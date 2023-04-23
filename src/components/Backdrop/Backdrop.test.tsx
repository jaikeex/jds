import React from 'react';
import { render, screen } from 'test-utils';
import type { BackdropProps } from './Backdrop';
import Backdrop from './Backdrop';

const renderComponent = (props: Partial<BackdropProps> = {}) => render(<Backdrop {...props} />);

describe('Backdrop', () => {
  it('should not render by default', () => {
    renderComponent();
    const backdrop = screen.queryByTestId('jds-backdrop');
    expect(backdrop).not.toBeInTheDocument();
  });

  it('should render when visible prop is true', () => {
    renderComponent({ visible: true });
    const backdrop = screen.getByTestId('jds-backdrop');
    expect(backdrop).toBeInTheDocument();
  });
});
