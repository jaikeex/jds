import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const PhoneIcon: React.FC<IconProps> = ({
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
        d="M8.25 42q-.95 0-1.6-.65Q6 40.7 6 39.75V33q0-.8.5-1.4.5-.6 1.25-.75l5.95-1.3q.65-.15 1.3.075.65.225 1.15.775l4.75 4.9q4.4-2.4 7.875-5.85 3.475-3.45 6.275-8.1l-5-5.05q-.4-.4-.525-.975T29.5 14.05l1.35-6.3q.15-.8.675-1.275Q32.05 6 32.75 6h7q.95 0 1.6.65.65.65.65 1.6 0 6.1-3 12.125T31.2 31.2Q26.4 36 20.375 39 14.35 42 8.25 42Z"
      />
    </svg>
  );
};
