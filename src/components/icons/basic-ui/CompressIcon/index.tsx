import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const CompressIcon: React.FC<IconProps> = ({
  size,
  color,
  className,
  styles,
  testId,
  ariaLabel,
  ...props
}) => {
  const classes = getIconClasses(size, color, className);

  return (
    <svg
      {...props}
      className={classes}
      style={styles}
      data-testid={testId}
      aria-label={ariaLabel}
      width={48}
      height={48}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 48 48"
      xmlSpace="preserve"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M23.95 44q-.65 0-1.075-.425-.425-.425-.425-1.075v-6.4l-2.85 2.8q-.4.4-1 .4t-1.05-.45q-.45-.45-.45-1.05 0-.6.45-1.05l5.35-5.3q.45-.4 1.075-.425Q24.6 31 25 31.45l5.3 5.35q.4.4.4 1t-.45 1.05q-.45.45-1.075.45t-1.025-.45l-2.7-2.75v6.45q0 .6-.425 1.025Q24.6 44 23.95 44ZM9.5 27.5q-.6 0-1.025-.425Q8.05 26.65 8.05 26q0-.65.425-1.075Q8.9 24.5 9.55 24.5h29q.6 0 1.025.425Q40 25.35 40 26q0 .65-.425 1.075-.425.425-1.075.425Zm0-6.05q-.6 0-1.025-.425-.425-.425-.425-1.075 0-.65.425-1.075.425-.425 1.075-.425h29q.6 0 1.025.425Q40 19.3 40 19.95q0 .65-.425 1.075-.425.425-1.075.425Zm13.4-6.9L17.55 9.2q-.4-.4-.4-1t.45-1.05q.45-.45 1.075-.45t1.025.45l2.7 2.75V3.45q0-.6.425-1.025Q23.25 2 23.9 2q.65 0 1.075.425.425.425.425 1.075v6.4l2.85-2.8q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05l-5.3 5.3q-.45.45-1.05.45-.6 0-1.05-.45Z"
      />
    </svg>
  );
};
