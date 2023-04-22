import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useSnackbarTimers } from './useSnackbarTimers';
import { SnackbarProvider } from 'components/SnackbarProvider';
import { act } from 'test-utils';

const wrapper = ({ children }: { children: React.ReactNode; }) => <SnackbarProvider>{children}</SnackbarProvider>;

describe('useSnackbarTimers', () => {
  it('should set isVisible to true initially', () => {
    const { result } = renderHook(() => useSnackbarTimers('test-id', false, 3000), { wrapper });
    expect(result.current.isVisible).toBe(true);
  });

  it('should not close snackbar automatically when disableAutoHide is true', async () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSnackbarTimers('test-id', true, 3000), { wrapper });
    expect(result.current.isVisible).toBe(true);

    vi.advanceTimersByTime(3000);
    expect(result.current.isVisible).toBe(true);

    vi.useRealTimers();
  });

  it('should close snackbar automatically after autoHideDuration when disableAutoHide is false', async () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSnackbarTimers('test-id', false, 3000), { wrapper });
    expect(result.current.isVisible).toBe(true);

    vi.advanceTimersByTime(3000);
    expect(result.current.isVisible).toBe(false);

    vi.useRealTimers();
  });

  it('should stop the close process when stopClose is called', async () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSnackbarTimers('test-id', false, 3000), { wrapper });
    expect(result.current.isVisible).toBe(true);

    act(() => {
      result.current.stopClose();
    });

    vi.advanceTimersByTime(3000);
    expect(result.current.isVisible).toBe(true);

    vi.useRealTimers();
  });

  it('should close snackbar with custom duration when closeAlert is called', async () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSnackbarTimers('test-id', false, 3000), { wrapper });
    expect(result.current.isVisible).toBe(true);

    act(() => {
      result.current.closeAlert(1000);
    });

    vi.advanceTimersByTime(1000);
    expect(result.current.isVisible).toBe(false);

    vi.useRealTimers();
  });
});
