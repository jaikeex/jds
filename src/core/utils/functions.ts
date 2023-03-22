import isPropValid from '@emotion/is-prop-valid';

export const makeId = (length: number) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const scrollToSide = (
  element: Element | null,
  options: ScrollToOptions,
  direction: 'left' | 'right' = 'right'
) => {
  if (!element) return;
  element.scrollBy({
    left: direction === 'left' ? -element.clientWidth : element.clientWidth,
    ...options
  });
};

export const checkOverflow = (element: HTMLElement | null) => {
  if (!element) return false;

  const currentOverflow = element.style.overflow;

  if (!currentOverflow || currentOverflow === 'visible') element.style.overflow = 'hidden';
  const isOverflowing = element.clientWidth < element.scrollWidth || element.clientHeight < element.scrollHeight;

  element.style.overflow = currentOverflow;

  return isOverflowing;
};

export const shouldForwardPropDefault = (propName: string) => isPropValid(propName);
