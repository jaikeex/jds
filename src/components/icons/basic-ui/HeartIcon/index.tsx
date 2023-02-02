import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const HeartIcon: React.FC<IconProps> = ({
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
        d="M21.65 40.35 19 37.9q-6.2-5.75-10.75-11T3.7 15.85q0-4.65 3.1-7.75Q9.9 5 14.5 5q2.55 0 5.025 1.175Q22 7.35 24 10.1q2.2-2.75 4.55-3.925Q30.9 5 33.5 5q4.6 0 7.7 3.1 3.1 3.1 3.1 7.75 0 5.8-4.575 11.05Q35.15 32.15 29 37.9l-2.65 2.45q-1 .9-2.35.9t-2.35-.9Z"
      />
    </svg>
  );
};