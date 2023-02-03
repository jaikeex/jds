import { useEffect, useState } from 'react';

export const useOffset = (ref: React.RefObject<HTMLInputElement>) => {
  const value = +ref.current?.value! || 0;
  const max = +ref.current?.attributes.getNamedItem('max')!.value!;
  const min = +ref.current?.attributes.getNamedItem('min')!.value!;
  const thumbWidth =
    ref.current?.attributes.getNamedItem('data-thumbWidth')!.value!;

  const [thumbOffset, setThumbOffset] = useState<number>(value);
  const [valueBoxOffset, setValueBoxOffset] = useState<number>(value);

  const getCurrentThumbOffset = () => {
    return (value - min) * (100 / (max - min));
  };

  const getCurrentPositionOffset = () => {
    return (
      Math.round(+thumbWidth * 1.5 * (getCurrentThumbOffset() / 100)) -
      (+thumbWidth * 1.5) / 2
    );
  };

  useEffect(() => {
    setThumbOffset(getCurrentThumbOffset());
    setValueBoxOffset(getCurrentPositionOffset());
    console.log(thumbOffset, valueBoxOffset);
  }, [value]);

  return [thumbOffset, valueBoxOffset];
};
