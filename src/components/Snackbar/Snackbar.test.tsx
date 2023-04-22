import React from 'react';
import { render, screen, waitFor, fireEvent } from 'test-utils';
import Snackbar from './Snackbar';
import '@testing-library/jest-dom';

describe('Snackbar', () => {
  it('should render the message correctly', () => {
    render(<Snackbar message="Test message" />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('should render the action correctly', () => {
    render(<Snackbar message="Test message" action={<button>Test action</button>} />);
    expect(screen.getByText('Test action')).toBeInTheDocument();
  });

  it('should render the custom icon correctly', () => {
    const TestIcon = () => <div>Test icon</div>;
    render(<Snackbar message="Test message" icon={<TestIcon />} />);
    expect(screen.getByText('Test icon')).toBeInTheDocument();
  });

  it('should render the close button when hideCloseButton is false', () => {
    render(<Snackbar message="Test message" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not render the close button when hideCloseButton is true', () => {
    render(<Snackbar message="Test message" hideCloseButton />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', async () => {
    const onClose = vi.fn();
    render(<Snackbar message="Test message" onClose={onClose} />);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });

  it('should call onOpen when the snackbar becomes visible', async () => {
    const onOpen = vi.fn();
    render(<Snackbar message="Test message" onOpen={onOpen} />);
    await waitFor(() => expect(onOpen).toHaveBeenCalled());
  });

  // it('should disappear automatically after autoHideDuration when disableAutoHide is false', async () => {
  //   vi.useFakeTimers();
  //   const onClose = vi.fn();
  //   render(<Snackbar message="Test message" onClose={onClose} autoHideDuration={3000} />);
  //   vi.advanceTimersByTime(4000);
  //   await waitFor(() => expect(onClose).toHaveBeenCalled());
  //   vi.useRealTimers();
  // }, 6000);

  // it('should not disappear automatically when disableAutoHide is true', async () => {
  //   vi.useFakeTimers();
  //   const onClose = vi.fn();
  //   render(<Snackbar message="Test message" onClose={onClose} disableAutoHide />);
  //   vi.advanceTimersByTime(4000);
  //   await waitFor(() => expect(onClose).not.toHaveBeenCalled());
  //   vi.useRealTimers();
  // }, 6000);
});
