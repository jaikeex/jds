import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const BookmarkIcon: React.FC<IconProps> = ({
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
        d="M40.5 41.5q-.65 0-1.075-.425Q39 40.65 39 40V5H13.15q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q12.5 2 13.15 2H39q1.2 0 2.1.9.9.9.9 2.1v35q0 .65-.425 1.075-.425.425-1.075.425ZM8.1 45.1q-.75.35-1.425-.1Q6 44.55 6 43.75V11q0-1.2.9-2.1Q7.8 8 9 8h24q1.2 0 2.125.9t.925 2.1v32.75q0 .8-.675 1.25-.675.45-1.425.1L21 39.65Z"
      />
    </svg>
  );
};
