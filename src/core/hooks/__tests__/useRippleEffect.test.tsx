import React from 'react';
import { render, fireEvent, act } from 'test-utils';
import '@testing-library/jest-dom';
import { useRippleEffect } from 'core/hooks';

type TestComponentProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const TestComponent: React.FC<TestComponentProps> = ({ onClick }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const createRippleEffect = useRippleEffect(ref);

  return (
    <div
      ref={ref}
      onClick={(event) => {
        createRippleEffect(event);
        onClick && onClick(event);
      }}
    >
      Click me
    </div>
  );
};

describe('useRippleEffect', () => {
  it('should create a ripple effect on click', () => {
    const { getByText } = render(<TestComponent />);
    const div = getByText('Click me');
    act(() => {
      fireEvent.click(div);
    });
    expect(div.querySelector('span')?.getAttribute('class')).toContain('css-');
  });

  it('should remove the previous ripple effect before creating a new one', () => {
    const { getByText } = render(<TestComponent />);
    const div = getByText('Click me');
    act(() => {
      fireEvent.click(div);
    });
    expect(div.querySelectorAll('span').length).toBe(1);

    act(() => {
      fireEvent.click(div);
    });
    expect(div.querySelectorAll('span').length).toBe(1);
  });

  it('should not create a ripple effect if the ref is not set', () => {
    const TestComponentNoRef = () => {
      const createRippleEffect = useRippleEffect(React.createRef<HTMLElement>());

      return (
        <div
          onClick={(event) => {
            createRippleEffect(event);
          }}
        >
          Click me
        </div>
      );
    };

    const { getByText } = render(<TestComponentNoRef />);
    const div = getByText('Click me');
    act(() => {
      fireEvent.click(div);
    });
    expect(div.querySelector('span')).toBeNull();
  });

  it('should create a centered ripple effect when the center option is set', () => {
    const TestComponentCentered = () => {
      const ref = React.useRef<HTMLDivElement>(null);
      const createRippleEffect = useRippleEffect(ref, { center: true });

      return (
        <div
          ref={ref}
          onClick={(event) => {
            createRippleEffect(event);
          }}
        >
          Click me
        </div>
      );
    };

    const { getByText } = render(<TestComponentCentered />);
    const div = getByText('Click me');
    act(() => {
      fireEvent.click(div);
    });

    const circle = div.querySelector('span');

    if (!circle) {
      throw new Error('cicle is null!');
    }

    expect(circle).toHaveStyle(`left: ${div.offsetWidth / 2 - parseFloat(circle.style.width) / 2}px`);
    expect(circle).toHaveStyle(`top: ${div.offsetHeight / 2 - parseFloat(circle.style.height) / 2}px`);
  });
});
