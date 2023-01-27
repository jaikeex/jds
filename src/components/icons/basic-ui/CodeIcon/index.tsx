import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const CodeIcon: React.FC<IconProps> = ({
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
        d="M32.95 34.95q-.45.45-1.05.425-.6-.025-1.05-.475-.45-.45-.45-1.075t.45-1.075l8.85-8.85-8.8-8.8q-.45-.45-.425-1.075.025-.625.475-1.075.45-.45 1.075-.45t1.075.45l9.85 9.9q.45.45.45 1.05 0 .6-.45 1.05Zm-18-.15-9.9-9.85q-.45-.45-.45-1.05 0-.6.45-1.05l10-10q.45-.45 1.075-.45t1.075.45q.45.45.45 1.075T17.2 15l-8.9 8.9 8.8 8.8q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.075.45t-1.075-.45Z"
      />
    </svg>
  );
};
