import { useEffect, useState } from 'react';

export const useIsFocused = <T extends HTMLElement>(ref: React.RefObject<T>, defaultState: boolean) => {
  const [isFocused, setIsFocused] = useState<boolean>(defaultState);

  const focusHandler = (event: FocusEvent) => {
    setIsFocused((event.target as HTMLElement) === ref.current);
  };

  const blurHandler = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    window.addEventListener('focus', focusHandler, true);
    window.addEventListener('blur', blurHandler, true);

    return () => {
      window.removeEventListener('focus', focusHandler);
      window.removeEventListener('blur', blurHandler);
    };
  }, []);

  return isFocused;
};
