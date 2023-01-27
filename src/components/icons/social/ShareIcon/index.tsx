import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const ShareIcon: React.FC<IconProps> = ({
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
        d="M36.35 44q-2.35 0-4.025-1.675Q30.65 40.65 30.65 38.3q0-.35.075-.825t.225-.875L15.8 27.8q-.75.85-1.85 1.375t-2.25.525q-2.35 0-4.025-1.675Q6 26.35 6 24q0-2.4 1.675-4.05T11.7 18.3q1.15 0 2.2.45 1.05.45 1.9 1.3l15.15-8.7q-.15-.35-.225-.8-.075-.45-.075-.85 0-2.4 1.675-4.05T36.35 4q2.4 0 4.05 1.65t1.65 4.05q0 2.35-1.65 4.025-1.65 1.675-4.05 1.675-1.15 0-2.225-.375Q33.05 14.65 32.3 13.8l-15.15 8.4q.1.4.175.925.075.525.075.875t-.075.75q-.075.4-.175.8l15.15 8.6q.75-.7 1.75-1.125 1-.425 2.3-.425 2.4 0 4.05 1.65t1.65 4.05q0 2.35-1.65 4.025Q38.75 44 36.35 44Z"
      />
    </svg>
  );
};
