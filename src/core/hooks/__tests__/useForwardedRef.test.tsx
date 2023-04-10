import React from 'react';
import { render, cleanup } from 'test-utils';
import '@testing-library/jest-dom';
import { useForwardedRef } from 'core/hooks';

type TestComponentProps = {
  forwardedRef: React.ForwardedRef<HTMLDivElement>;
};

const TestComponent: React.FC<TestComponentProps> = ({ forwardedRef }) => {
  const divRef = useForwardedRef<HTMLDivElement>(forwardedRef);
  return <div ref={divRef}>Test</div>;
};

describe('useForwardedRef', () => {
  afterEach(cleanup);

  it('should forward ref to the target element when ref is a function', () => {
    const ref = vi.fn();
    render(<TestComponent forwardedRef={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement);
  });

  it('should forward ref to the target element when ref is a ref object', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<TestComponent forwardedRef={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should not update the ref if no ref is provided', () => {
    render(<TestComponent forwardedRef={null} />);
    expect(() => {
      // Attempting to read a non-existent ref should not throw an error
      (TestComponent as any).current;
    }).not.toThrow();
  });
});
