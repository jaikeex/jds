import { useEffect, useState } from 'react';
import { useAlertContext } from 'store/AlertContext';

export const useAlertTimers = (ref: React.RefObject<HTMLDivElement>, autoHide: boolean, autoHideDuration: number) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [closeTimeoutId, setCloseTimeoutId] = useState<number>();
  const [isMidHiding, setIsMidHiding] = useState<boolean>(false);

  const { removeItem } = useAlertContext();

  const stopClose = () => {
    clearTimeout(closeTimeoutId);
  };

  const closeAlert = (duration: number) => {
    stopClose();

    if (!isMidHiding) {
      setCloseTimeoutId(
        window.setTimeout(() => {
          setIsMidHiding(true);
          setHideAnimationTimeout();
        }, duration)
      );
    }
  };

  const setHideAnimationTimeout = () => {
    setIsMidHiding(false);
    setIsVisible(false);
    ref.current && removeItem(ref.current.id);
  };

  useEffect(() => {
    if (autoHide) {
      closeAlert(autoHideDuration);
    }
  }, [isVisible]);

  return { isVisible, closeAlert, stopClose };
};
