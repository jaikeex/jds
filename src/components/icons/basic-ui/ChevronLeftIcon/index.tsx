import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const ChevronLeftIcon: React.FC<IconProps> = ({
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
        d="m26.8 35.05-9.9-9.9q-.25-.3-.375-.575-.125-.275-.125-.625t.125-.625q.125-.275.375-.575l9.95-9.95q.5-.5 1.225-.5.725 0 1.225.5.5.5.475 1.25-.025.75-.525 1.25l-8.65 8.65 8.7 8.7q.5.5.5 1.2t-.5 1.2q-.5.5-1.25.5t-1.25-.5Z"
      />
    </svg>
  );
};
