import React from 'react';
import type { RippleEffectOptions } from 'core/types';
import { useRippleEffectStyles } from './useRippleEffectStyles';

export const useRippleEffect = <T extends HTMLElement>(ref: React.RefObject<T>, options?: RippleEffectOptions) => {
  const rippleOptions: RippleEffectOptions = {
    animationTime: 600,
    center: false,
    color: 'default',
    ...options
  };

  const classes = useRippleEffectStyles(rippleOptions);

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

        circle.classList.add(...classes.root.split(' '));

        target.appendChild(circle);

        setTimeout(() => {
          const ripple = document.getElementsByClassName(classes.root)[0];
          if (ripple) ripple.remove();
        }, 500);
      }
    },
    [ref.current, rippleOptions.animationTime, rippleOptions.color, rippleOptions.center, classes]
  );

  return createRippleEffect;
};
