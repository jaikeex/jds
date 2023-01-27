import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const AppsIcon: React.FC<IconProps> = ({
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
        d="M11.15 40.3q-1.45 0-2.45-1-1-1-1-2.45 0-1.45 1-2.45 1-1 2.45-1 1.45 0 2.45 1 1 1 1 2.45 0 1.45-1 2.45-1 1-2.45 1Zm12.85 0q-1.45 0-2.45-1-1-1-1-2.45 0-1.45 1-2.45 1-1 2.45-1 1.45 0 2.45 1 1 1 1 2.45 0 1.45-1 2.45-1 1-2.45 1Zm12.85 0q-1.45 0-2.45-1-1-1-1-2.45 0-1.45 1-2.45 1-1 2.45-1 1.45 0 2.45 1 1 1 1 2.45 0 1.45-1 2.45-1 1-2.45 1Zm-25.7-12.85q-1.45 0-2.45-1-1-1-1-2.45 0-1.45 1-2.45 1-1 2.45-1 1.45 0 2.45 1 1 1 1 2.45 0 1.45-1 2.45-1 1-2.45 1Zm12.85 0q-1.45 0-2.45-1-1-1-1-2.45 0-1.45 1-2.45 1-1 2.45-1 1.45 0 2.45 1 1 1 1 2.45 0 1.45-1 2.45-1 1-2.45 1Zm12.85 0q-1.45 0-2.45-1-1-1-1-2.45 0-1.45 1-2.45 1-1 2.45-1 1.45 0 2.45 1 1 1 1 2.45 0 1.45-1 2.45-1 1-2.45 1ZM11.15 14.6q-1.45 0-2.45-1-1-1-1-2.45 0-1.45 1-2.45 1-1 2.45-1 1.45 0 2.45 1 1 1 1 2.45 0 1.45-1 2.45-1 1-2.45 1Zm12.85 0q-1.45 0-2.45-1-1-1-1-2.45 0-1.45 1-2.45 1-1 2.45-1 1.45 0 2.45 1 1 1 1 2.45 0 1.45-1 2.45-1 1-2.45 1Zm12.85 0q-1.45 0-2.45-1-1-1-1-2.45 0-1.45 1-2.45 1-1 2.45-1 1.45 0 2.45 1 1 1 1 2.45 0 1.45-1 2.45-1 1-2.45 1Z"
      />
    </svg>
  );
};
