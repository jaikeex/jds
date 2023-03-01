import { useEffect } from 'react';

export const useOutsideClick = (ref: React.RefObject<HTMLElement>, onOutsideClick: (event: MouseEvent) => void) => {
  useEffect(() => {
    function outsideClickHandler(event: MouseEvent) {
      const target = event.target as HTMLElement;

      if (ref.current && !ref.current.contains(target)) {
        onOutsideClick(event);
      }
    }

    document.addEventListener('mousedown', outsideClickHandler);
    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  }, [ref]);
};
