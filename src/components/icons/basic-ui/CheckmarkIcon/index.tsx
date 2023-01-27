import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const CheckmarkIcon: React.FC<IconProps> = ({
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
        d="M18.9 35.3q-.35 0-.625-.125T17.7 34.8l-9.05-9.05q-.5-.5-.5-1.25t.5-1.25q.5-.5 1.2-.5t1.2.5l7.85 7.85 18-18q.5-.5 1.2-.5t1.25.5q.5.5.5 1.225 0 .725-.5 1.225L20.1 34.8q-.3.25-.575.375-.275.125-.625.125Z"
      />
    </svg>
  );
};
