import type React from 'react';
import { useEffect, useState } from 'react';

export const useOffset = (ref: React.RefObject<HTMLInputElement>) => {
  const value = ref.current ? ref.current.valueAsNumber : 0;

  const min = ref.current && ref.current.hasAttribute('min') ? Number(ref.current.getAttribute('min')) : 0;

  const max = ref.current && ref.current.hasAttribute('max') ? Number(ref.current.getAttribute('max')) : 100;

  const thumbWidth =
    ref.current && ref.current.hasAttribute('data-thumbwidth')
      ? Number(ref.current.getAttribute('data-thumbwidth'))
      : 0;

  const [thumbOffset, setThumbOffset] = useState<number>(value);
  const [valueBoxOffset, setValueBoxOffset] = useState<number>(value);

  const getCurrentThumbOffset = () => (value - min) * (100 / (max - min));

  const getCurrentPositionOffset = () =>
    Math.round(+thumbWidth * 1.5 * (getCurrentThumbOffset() / 100)) - (+thumbWidth * 1.5) / 2;

  useEffect(() => {
    setThumbOffset(getCurrentThumbOffset());
    setValueBoxOffset(getCurrentPositionOffset());
  }, [value, ref.current]);

  return [thumbOffset, valueBoxOffset];
};
