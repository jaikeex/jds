import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const ExpandIcon: React.FC<IconProps> = ({
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
        d="M9.6 44q-.65 0-1.075-.425Q8.1 43.15 8.1 42.5q0-.65.425-1.075Q8.95 41 9.6 41h28.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q39.05 44 38.4 44Zm0-37q-.65 0-1.075-.425Q8.1 6.15 8.1 5.5q0-.65.425-1.075Q8.95 4 9.6 4h28.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q39.05 7 38.4 7Zm14.5 31.9q-.3 0-.55-.1-.25-.1-.5-.35l-5.5-5.5q-.4-.4-.4-1.05t.45-1.1q.45-.45 1.075-.45t1.075.45l2.85 2.9V14.3l-2.9 2.9q-.4.4-1.025.4-.625 0-1.075-.45-.45-.45-.45-1.075T17.6 15l5.45-5.45q.25-.25.5-.35.25-.1.55-.1.3 0 .55.1.25.1.5.35l5.5 5.5q.4.4.425 1.025.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45l-2.9-2.85v19.4l2.9-2.9q.4-.4 1.05-.425.65-.025 1.1.425.45.45.45 1.075t-.45 1.075l-5.5 5.5q-.25.25-.5.35-.25.1-.55.1Z"
      />
    </svg>
  );
};
