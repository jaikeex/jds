import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const DarkModeIcon: React.FC<IconProps> = ({
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
        d="M39.3 36.85Q36.45 40 32.4 42q-4.05 2-8.4 2-4.2 0-7.85-1.55Q12.5 40.9 9.8 38.2q-2.7-2.7-4.25-6.35Q4 28.2 4 24q0-7.2 4.725-12.825Q13.45 5.55 20.5 4.3q1.3-.25 1.9.575.6.825.15 2.175-1.35 4.25-.9 8.65.45 4.4 2.5 8.15t5.575 6.475Q33.25 33.05 38 33.9q1.4.25 1.775 1.1.375.85-.475 1.85Z"
      />
    </svg>
  );
};
