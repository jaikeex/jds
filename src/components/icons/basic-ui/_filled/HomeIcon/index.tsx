import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const HomeIcon: React.FC<IconProps> = ({
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
      <path d="M11.1 42.3q-1.4 0-2.4-1t-1-2.4V19.55q0-.8.35-1.525.35-.725 1-1.225l12.9-9.65q.45-.35.975-.525Q23.45 6.45 24 6.45q.55 0 1.075.175.525.175.975.525l12.9 9.65q.65.5 1 1.225.35.725.35 1.525V38.9q0 1.4-1 2.4t-2.4 1h-8.85V27.95h-8.1V42.3Z" />
    </svg>
  );
};
