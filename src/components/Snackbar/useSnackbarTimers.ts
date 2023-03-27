import { useEffect, useState } from 'react';
import { useSnackbarContext } from 'components/SnackbarProvider';

export const useSnackbarTimers = (id: string, disableAutoHide: boolean, autoHideDuration: number) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [closeTimeoutId, setCloseTimeoutId] = useState<number>();
  const [isMidHiding, setIsMidHiding] = useState<boolean>(false);

  const { removeItem } = useSnackbarContext();

  const stopClose = () => {
    clearTimeout(closeTimeoutId);
  };

  const closeSnackbar = (duration: number) => {
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
    removeItem(id);
  };

  useEffect(() => {
    if (!disableAutoHide) {
      closeSnackbar(autoHideDuration);
    }
  }, [isVisible]);

  return { isVisible, closeAlert: closeSnackbar, stopClose };
};
