import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const DownArrowIcon: React.FC<IconProps> = ({
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
        d="m288 32v370.745l98.551-98.551a32 32 0 0 1 45.255 45.255l-153.179 153.178a32 32 0 0 1 -45.254 0l-153.179-153.178a32 32 0 0 1 45.255-45.255l98.551 98.551v-370.745a32 32 0 0 1 64 0z"
      />
    </svg>
  );
};
