import React from 'react';
import { render, fireEvent, act } from 'test-utils';
import '@testing-library/jest-dom';
import { useIsFocused } from 'core/hooks';

type TestComponentProps = {
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  defaultState?: boolean;
};

const TestComponent: React.FC<TestComponentProps> = ({ onFocus, onBlur, defaultState = false }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const isFocused = useIsFocused(ref, defaultState);

  return (
    <div>
      <input
        ref={ref}
        onFocus={(event) => {
          onFocus && onFocus(event);
        }}
        onBlur={() => {
          onBlur && onBlur();
        }}
      />
      {isFocused ? (
        <div data-testid="focus-indicator">Focused</div>
      ) : (
        <div data-testid="focus-indicator">Not Focused</div>
      )}
    </div>
  );
};

describe('useIsFocused', () => {
  it('should start with the default focus state', () => {
    const { getByTestId } = render(<TestComponent defaultState={true} />);
    expect(getByTestId('focus-indicator')).toHaveTextContent('Focused');
  });

  it('should update the focus state when the input is focused', () => {
    const { getByTestId, getByRole } = render(<TestComponent defaultState={false} />);
    const input = getByRole('textbox');
    act(() => {
      fireEvent.focus(input);
    });
    expect(getByTestId('focus-indicator')).toHaveTextContent('Focused');
  });

  it('should update the focus state when the input loses focus', () => {
    const { getByTestId, getByRole } = render(<TestComponent defaultState={true} />);
    const input = getByRole('textbox');
    act(() => {
      fireEvent.blur(input);
    });
    expect(getByTestId('focus-indicator')).toHaveTextContent('Not Focused');
  });

  it('should not update the focus state when a different element is focused', () => {
    const { getByTestId, getByRole } = render(
      <>
        <TestComponent defaultState={true} />
        <input data-testid="another-input" />
      </>
    );
    const anotherInput = getByTestId('another-input');
    act(() => {
      fireEvent.focus(anotherInput);
    });
    expect(getByTestId('focus-indicator')).toHaveTextContent('Focused');
  });
});
