import React from 'react';
import type { RippleEffectOptions } from 'core/types';
import { css, keyframes } from '@emotion/css';
import { useTheme } from 'styling';

export const useRippleEffect = <T extends HTMLElement>(ref: React.RefObject<T>, options?: RippleEffectOptions) => {
  const rippleOptions: RippleEffectOptions = {
    animationTime: 600,
    center: false,
    color: 'default',
    ...options
  };

  const { theme } = useTheme();

  const animation = keyframes({
    to: {
      transform: 'scale(4)',
      opacity: 0
    }
  });

  const rootClass = css({
    position: 'absolute',
    borderRadius: '50%',
    transform: 'scale(0)',
    animation: `${animation} ${rippleOptions.animationTime}ms linear`,
    backgroundColor:
      rippleOptions.color === 'default' || undefined
        ? theme.palette.rgba(theme.palette.text.primary, 0.35)
        : theme.palette.rgba(theme.palette[rippleOptions.color || 'primary'].main, 0.35)
  });

  const createRippleEffect = React.useCallback(
    (event: React.MouseEvent<T>) => {
      const target = ref.current;

      if (target) {
        const circle = document.createElement('span');
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;

        const rect = target.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = rippleOptions.center
          ? `${target.offsetWidth / 2 - radius}px`
          : `${event.clientX - (rect.left + radius)}px`;
        circle.style.top = rippleOptions.center
          ? `${target.offsetHeight / 2 - radius}px`
          : `${event.clientY - (rect.top + radius)}px`;

        circle.classList.add(rootClass);

        const ripple = document.getElementsByClassName(rootClass)[0];
        if (ripple) ripple.remove();

        target.appendChild(circle);
      }
    },
    [ref.current, rippleOptions.animationTime, rippleOptions.color, rippleOptions.center]
  );

  return createRippleEffect;
};
