import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const UndoIcon: React.FC<IconProps> = ({
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
        d="M15.55 38.2q-.75 0-1.225-.475-.475-.475-.475-1.225 0-.75.475-1.225.475-.475 1.225-.475H28.5q3.4 0 5.875-2.275T36.85 26.9q0-3.35-2.475-5.625T28.5 19H14.25l4.3 4.3q.5.5.5 1.2t-.5 1.2q-.5.5-1.2.5t-1.2-.5l-7.2-7.2q-.25-.3-.375-.575-.125-.275-.125-.625t.125-.625q.125-.275.375-.575l7.2-7.2q.5-.5 1.2-.5t1.2.5q.5.5.5 1.2t-.5 1.2l-4.3 4.3h14.2q4.85 0 8.325 3.275Q40.25 22.15 40.25 26.9t-3.475 8.025Q33.3 38.2 28.45 38.2Z"
      />
    </svg>
  );
};
