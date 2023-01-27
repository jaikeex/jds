import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const MoreHorizontalIcon: React.FC<IconProps> = ({
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
        d="M10.1 26.55q-1 0-1.75-.75T7.6 24q0-1.05.75-1.8t1.8-.75q1 0 1.75.75t.75 1.8q0 1.05-.75 1.8t-1.8.75Zm13.9 0q-1.05 0-1.8-.75t-.75-1.8q0-1.05.75-1.8t1.8-.75q1.05 0 1.8.75t.75 1.8q0 1.05-.75 1.8t-1.8.75Zm13.85 0q-1.05 0-1.775-.75-.725-.75-.725-1.8t.75-1.8q.75-.75 1.8-.75t1.775.75q.725.75.725 1.8t-.75 1.8q-.75.75-1.8.75Z"
      />
    </svg>
  );
};
