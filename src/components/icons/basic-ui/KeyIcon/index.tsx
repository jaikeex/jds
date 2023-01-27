import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const KeyIcon: React.FC<IconProps> = ({
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
        d="M14 30.45q2.7 0 4.575-1.875T20.45 24q0-2.7-1.875-4.575T14 17.55q-2.7 0-4.575 1.875T7.55 24q0 2.7 1.875 4.575T14 30.45Zm0 5.85q-5.1 0-8.7-3.6-3.6-3.6-3.6-8.7t3.6-8.7q3.6-3.6 8.7-3.6 4.3 0 7.275 2.375Q24.25 16.45 25.4 20.1h16.5q.35 0 .625.125t.575.425l2.1 2.05q.25.3.375.575.125.275.125.625t-.125.625q-.125.275-.425.575l-4.95 5q-.3.25-.575.375-.275.125-.625.125t-.625-.125q-.275-.125-.575-.425L34.7 27l-3.05 3.05q-.3.3-.6.425t-.6.125q-.35 0-.65-.125-.3-.125-.55-.375l-2.3-2.3H25.4q-1 3.8-4.15 6.15Q18.1 36.3 14 36.3Z"
      />
    </svg>
  );
};
