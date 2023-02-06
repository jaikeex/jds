import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const BoltIconOutlined: React.FC<IconProps> = ({
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
        d="M19.65 39.75 33.6 23h-9l1.8-14.3L13.75 27h7.7ZM18 30h-7.15q-.9 0-1.325-.8-.425-.8.125-1.55l16.9-24.4q.4-.55 1-.75.6-.2 1.2.05t.95.8q.35.55.25 1.2L28 20h8.8q.95 0 1.35.85.4.85-.2 1.6L19.4 44.7q-.4.5-1.025.65-.625.15-1.175-.1-.55-.3-.875-.825Q16 43.9 16.1 43.25Zm5.65-5.75Z"
      />
    </svg>
  );
};
