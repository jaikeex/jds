import React from 'react';
import { fireEvent, render, screen } from 'test-utils';
import { SnackbarProvider } from 'components/SnackbarProvider';
import { useSnackbar } from './useSnackbar';

const TestComponent: React.FC = () => {
  const displaySnackbar = useSnackbar();

  return (
    <div>
      <button onClick={() => displaySnackbar({ message: 'Test message', autoHideDuration: 5000 })}>Add Snackbar</button>
    </div>
  );
};

const renderComponent = () =>
  render(
    <SnackbarProvider>
      <TestComponent />
    </SnackbarProvider>
  );

describe('SnackbarProvider', () => {
  it('should render SnackbarProvider without crashing', () => {
    renderComponent();
  });

  it('should add a snackbar item when displaySnackbar is called', async () => {
    renderComponent();
    fireEvent.click(screen.getByText('Add Snackbar'));

    expect(await screen.findByText('Test message')).toBeInTheDocument();
  });

  it('should respect the maxItems prop', async () => {
    render(
      <SnackbarProvider maxItems={2}>
        <TestComponent />
      </SnackbarProvider>
    );

    fireEvent.click(screen.getByText('Add Snackbar'));
    fireEvent.click(screen.getByText('Add Snackbar'));
    fireEvent.click(screen.getByText('Add Snackbar'));

    const snackbarItems = await screen.findAllByText('Test message');
    expect(snackbarItems.length).toBe(2);
  });
});
