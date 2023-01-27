import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const BoltIcon: React.FC<IconProps> = ({
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
        d="M21.15 42.3q-.55 0-.85-.35-.3-.35-.2-.9l1.85-13.1h-7.4q-.6 0-.85-.5t.05-.95l12-20.15q.15-.25.525-.45T27 5.7q.55 0 .85.35.3.35.2.9L26.2 20h7.3q.55 0 .85.5.3.5 0 .95L22.4 41.65q-.15.25-.525.45t-.725.2Z"
      />
    </svg>
  );
};
