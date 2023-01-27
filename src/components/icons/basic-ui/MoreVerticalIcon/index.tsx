import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const MoreVerticalIcon: React.FC<IconProps> = ({
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
        d="M24 40.4q-1.05 0-1.8-.75t-.75-1.8q0-1 .75-1.75t1.8-.75q1.05 0 1.8.75t.75 1.8q0 1-.75 1.75t-1.8.75Zm0-13.85q-1.05 0-1.8-.75t-.75-1.8q0-1.05.75-1.8t1.8-.75q1.05 0 1.8.75t.75 1.8q0 1.05-.75 1.8t-1.8.75Zm0-13.9q-1.05 0-1.8-.75t-.75-1.8q0-1.05.75-1.775.75-.725 1.8-.725t1.8.75q.75.75.75 1.8t-.75 1.775q-.75.725-1.8.725Z"
      />
    </svg>
  );
};
