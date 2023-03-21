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

export const shouldForwardProp = (prop: string) => {
  const stylePropNames = [
    'orientation',
    'color',
    'location',
    'enableBackground',
    'upperCase',
    'hyphens',
    'gutterBottom',
    'noWrap',
    'textAlign',
    'labelPosition',
    'outlined',
    'sharpCorners',
    'flexItem',
    'removeMargin',
    'compact',
    'clickable',
    'visible',
    'active',
    'scrollButtons',
    'justifyButtons',
    'removeHorizontalPadding',
    'removeVerticalPadding',
    'inputValue',
    'isFocused',
    'transformLabel',
    'elementBefore',
    'removeBorder',
    'as',
    'variant'
    // 'appearance'
  ];

  return !stylePropNames.includes(prop);
};
