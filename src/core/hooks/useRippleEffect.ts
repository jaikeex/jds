export const useRippleEffect = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  themed: boolean = false
) => {
  const createRippleEffect = (event: React.MouseEvent<T>) => {
    const target = ref.current!;

    const circle = document.createElement('span');
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    const rect = target.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (rect.left + radius)}px`;
    circle.style.top = `${event.clientY - (rect.top + radius)}px`;

    circle.classList.add(themed ? 'u-ripple-themed' : 'u-ripple');

    const ripple = document.getElementsByClassName('u-ripple')[0];
    if (ripple) ripple.remove();

    const rippleThemed = document.getElementsByClassName('u-ripple-themed')[0];
    if (rippleThemed) rippleThemed.remove();

    target.appendChild(circle);
  };

  return createRippleEffect;
};
