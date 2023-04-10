import React from 'react';
import { render, cleanup, screen, fireEvent } from 'test-utils';
import '@testing-library/jest-dom';
import { useScrollToView } from 'core/hooks';

type TestComponentProps = {
  direction: 'left' | 'top';
  padding: number;
};

const TestComponent: React.FC<TestComponentProps> = ({ direction, padding }) => {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const scrollToView = useScrollToView(elementRef.current, direction, padding);

  return (
    <div
      data-testid="scroll-container"
      style={{ width: '100px', height: '100px', overflow: 'auto', position: 'relative', display: 'flex' }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          marginTop: direction === 'top' ? '120px' : '0',
          marginLeft: direction === 'left' ? '120px' : '0'
        }}
      />
      <button onClick={scrollToView}>Scroll</button>
    </div>
  );
};

describe('useScrollToView', () => {
  afterEach(cleanup);

  it('should scroll horizontally to the element when direction is "left"', async () => {
    const spyScrollBy = vi.fn();
    vi.spyOn(React, 'useRef').mockReturnValue({
      current: {
        offsetLeft: 0,
        clientWidth: 60,
        offsetParent: {
          clientWidth: 100,
          scrollLeft: 0,
          scrollBy: spyScrollBy
        }
      }
    });

    render(<TestComponent direction="left" padding={10} />);

    fireEvent.click(screen.getByText('Scroll'));

    expect(spyScrollBy).toHaveBeenCalledWith({
      behavior: 'smooth',
      left: expect.any(Number)
    });
  });

  it('should scroll vertically to the element when direction is "top"', () => {
    const spyScrollBy = vi.fn();
    vi.spyOn(React, 'useRef').mockReturnValue({
      current: {
        offsetLeft: 0,
        clientWidth: 60,
        offsetParent: {
          clientWidth: 100,
          scrollLeft: 0,
          scrollBy: spyScrollBy
        }
      }
    });

    render(<TestComponent direction="top" padding={10} />);

    fireEvent.click(screen.getByText('Scroll'));

    expect(spyScrollBy).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number)
    });
  });

  it('should not scroll if element or its offsetParent is null', () => {
    const spyScrollBy = vi.fn();
    vi.spyOn(React, 'useRef').mockReturnValue({
      current: {
        offsetLeft: 0,
        clientWidth: 60,
        offsetParent: null
      }
    });

    render(<TestComponent direction="left" padding={10} />);

    fireEvent.click(screen.getByText('Scroll'));

    expect(spyScrollBy).not.toHaveBeenCalled();
  });
});
