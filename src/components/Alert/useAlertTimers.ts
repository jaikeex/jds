import { useEffect, useState } from 'react';
import { useAlertContext } from 'store/AlertContext';
import type { AlertLocation } from './types';

export const useAlertTimers = (
  ref: React.RefObject<HTMLDivElement>,
  location: AlertLocation,
  autoCloseDuration: number
) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [closeTimeoutId, setCloseTimeoutId] = useState<number>();
  const [isMidHiding, setIsMidHiding] = useState<boolean>(false);

  const { removeItem } = useAlertContext();

  const getAnimationName = () => {
    let direction: string;
    let duration: string;

    if (location.horizontal !== 'center') {
      direction = location.horizontal;
      duration = '0.4s';
    } else {
      direction = location.vertical;
      duration = '1s';
    }

    return `slide-out-${direction} ${duration}`;
  };

  const stopClose = () => {
    clearTimeout(closeTimeoutId);
  };

  const closeAlert = (duration: number) => {
    stopClose();

    if (!isMidHiding) {
      setCloseTimeoutId(
        window.setTimeout(() => {
          if (ref.current) {
            ref.current.style.animation = getAnimationName();
          }

          setIsMidHiding(true);
          setHideAnimationTimeout();
        }, duration)
      );
    }
  };

  const setHideAnimationTimeout = () => {
    window.setTimeout(() => {
      setIsMidHiding(false);
      setIsVisible(false);
      ref.current && removeItem(ref.current.id);
    }, 300);
  };

  useEffect(() => {
    isVisible && closeAlert(autoCloseDuration);
  }, [isVisible]);

  return { isVisible, closeAlert, stopClose };
};
