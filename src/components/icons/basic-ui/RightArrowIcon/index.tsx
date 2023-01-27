import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const RightArrowIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m0 256a32 32 0 0 1 32-32h370.745l-98.545-98.551a32 32 0 1 1 45.254-45.255l153.173 153.179a32 32 0 0 1 0 45.254l-153.178 153.179a32 32 0 1 1 -45.249-45.255l98.545-98.551h-370.745a32 32 0 0 1 -32-32z"
      />
    </svg>
  );
};
