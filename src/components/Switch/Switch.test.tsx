import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import Switch from './Switch';

describe('Switch', () => {
  const onChangeMock = vi.fn();

  const defaultProps = {
    label: 'Test Switch',
    onChange: onChangeMock
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render Switch component without crashing', () => {
    render(<Switch {...defaultProps} />);
  });

  it('should handle onChange event correctly', () => {
    render(<Switch {...defaultProps} />);
    const switchInput = screen.getByTestId('jds-switch');

    fireEvent.click(switchInput);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(switchInput).toBeChecked();
  });

  it('should render the switch as checked if checked prop is passed', () => {
    render(<Switch {...defaultProps} checked />);
    const switchInput = screen.getByTestId('jds-switch');

    expect(switchInput).toBeChecked();
  });

  it('should render the switch as unchecked if defaultChecked is false and checked is undefined', () => {
    render(<Switch {...defaultProps} defaultChecked={false} />);
    const switchInput = screen.getByTestId('jds-switch');

    expect(switchInput).not.toBeChecked();
  });

  it('should render the switch as checked if defaultChecked is true', () => {
    render(<Switch {...defaultProps} defaultChecked />);
    const switchInput = screen.getByTestId('jds-switch');

    expect(switchInput).toBeChecked();
  });

  it('should not toggle the switch when disabled', () => {
    render(<Switch {...defaultProps} disabled />);
    const switchInput = screen.getByTestId('jds-switch');

    fireEvent.click(switchInput);

    expect(onChangeMock).toHaveBeenCalledTimes(0);
    expect(switchInput).not.toBeChecked();
  });

  it('should render the label and labelPosition correctly', () => {
    render(<Switch {...defaultProps} labelPosition="left" />);
    const switchLabel = screen.getByText('Test Switch');

    expect(switchLabel).toBeInTheDocument();
  });
});
