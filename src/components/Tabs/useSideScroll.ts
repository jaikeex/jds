import { checkOverflow } from 'core/utils';
import { useEffect, useState } from 'react';

export const useSideScroll = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  scrollButtonsStrategy: 'auto' | 'allways' | 'never'
) => {
  const [scrolledToLeft, setScrolledToLeft] = useState<boolean>(true);
  const [scrolledToRight, setScrolledToRight] = useState<boolean>(false);
  const [overflows, setOverflows] = useState<boolean>(false);
  const [leftScrollButtonVisible, setLeftScrollButtonVisible] = useState<boolean>(false);
  const [rightScrollButtonVisible, setRightScrollButtonVisible] = useState<boolean>(false);

  const scrollEventListener = () => {
    if (!ref.current) return;
    const buttonPanelElement = document.getElementById(ref.current.id);

    if (buttonPanelElement) {
      setScrolledToRight(
        buttonPanelElement.scrollWidth - buttonPanelElement.scrollLeft - buttonPanelElement.clientWidth < 1
      );
      setScrolledToLeft(buttonPanelElement.scrollLeft < 1);
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    const buttonPanelElement = document.getElementById(ref.current.id);

    if (buttonPanelElement && checkOverflow(buttonPanelElement)) {
      buttonPanelElement.addEventListener('scroll', scrollEventListener);
    }

    return () => buttonPanelElement?.removeEventListener('scroll', scrollEventListener);
  });

  useEffect(() => {
    setOverflows(checkOverflow(ref.current));
  }, [ref]);

  useEffect(() => {
    if (overflows && scrollButtonsStrategy === 'allways') {
      setLeftScrollButtonVisible(true);
    } else if (overflows && scrollButtonsStrategy === 'auto' && !scrolledToLeft) {
      setLeftScrollButtonVisible(true);
    } else {
      setLeftScrollButtonVisible(false);
    }
  }, [scrollButtonsStrategy, scrolledToLeft, overflows]);

  useEffect(() => {
    if (overflows && scrollButtonsStrategy === 'allways') {
      setRightScrollButtonVisible(true);
    } else if (overflows && scrollButtonsStrategy === 'auto' && !scrolledToRight) {
      setRightScrollButtonVisible(true);
    } else {
      setRightScrollButtonVisible(false);
    }
  }, [scrollButtonsStrategy, scrolledToRight, overflows]);

  return { leftScrollButtonVisible, rightScrollButtonVisible, scrolledToLeft, scrolledToRight };
};
