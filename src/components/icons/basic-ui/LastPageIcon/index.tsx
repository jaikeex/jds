import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const LastPageIcon: React.FC<IconProps> = ({
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
        d="M12.55 34.65q-.45-.45-.45-1.075t.45-1.075l8.5-8.5-8.55-8.55q-.45-.45-.425-1.075.025-.625.475-1.075.45-.45 1.05-.45.6 0 1.05.45l9.65 9.65q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.6 9.6q-.45.45-1.075.45t-1.075-.45ZM34.5 36q-.65 0-1.075-.425Q33 35.15 33 34.5v-21q0-.65.425-1.075Q33.85 12 34.5 12q.65 0 1.075.425Q36 12.85 36 13.5v21q0 .65-.425 1.075Q35.15 36 34.5 36Z"
      />
    </svg>
  );
};
