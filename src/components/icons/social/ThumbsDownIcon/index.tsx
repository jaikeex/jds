import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const ThumbsDownIcon: React.FC<IconProps> = ({
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
        d="M5 31.6q-1.15 0-2.075-.925Q2 29.75 2 28.6v-4.1q0-.55.125-1.275.125-.725.375-1.275l5.8-13.4q.45-1.05 1.475-1.8Q10.8 6 11.95 6H32.3q1.25 0 2.125.875T35.3 9v21.4q0 .55-.225 1.1t-.625.95L24.1 43.35q-.7.7-1.675.85-.975.15-1.825-.35t-1.275-1.4q-.425-.9-.225-1.85l1.9-9ZM41.15 6q1.15 0 2 .85.85.85.85 2v19.9q0 1.15-.85 2-.85.85-2 .85t-2-.85q-.85-.85-.85-2V8.85q0-1.15.85-2Q40 6 41.15 6Z"
      />
    </svg>
  );
};
