export const useRippleEffect = <T extends HTMLElement>(
  ref: React.RefObject<T>
) => {
  const createRippleEffect = (event: React.MouseEvent<T>) => {
    const target = ref.current!;

    const circle = document.createElement('span');
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (target.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (target.offsetTop + radius)}px`;

    circle.classList.add('u-ripple');
    const ripple = target.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    target.appendChild(circle);
  };

  return createRippleEffect;
};
