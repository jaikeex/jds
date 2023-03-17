import { useCallback } from 'react';

export const useScrollToView = (element: HTMLElement | null, direction: 'left' | 'top', padding: number) => {
  const scrollToView = useCallback(() => {
    if (!element || !element.offsetParent) return;

    const offsetLeft = element.offsetLeft;
    const width = element.clientWidth;
    const parentScrollLeft = element.offsetParent.scrollLeft;
    const parentWidth = element.offsetParent.clientWidth;

    const scrollOptions: ScrollOptions = {
      behavior: 'smooth'
    };

    const elementRightOverflowX = parentWidth + parentScrollLeft - offsetLeft - width;
    const elementLeftOverflowX = offsetLeft - parentScrollLeft;

    if (elementRightOverflowX < padding) {
      element.offsetParent?.scrollBy({ ...scrollOptions, [direction]: padding - elementRightOverflowX });
    } else if (elementLeftOverflowX < padding) {
      element.offsetParent?.scrollBy({ ...scrollOptions, [direction]: -(padding - elementLeftOverflowX) });
    }
  }, [element, direction, padding]);

  return scrollToView;
};
