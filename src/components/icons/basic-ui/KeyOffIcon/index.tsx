import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const KeyOffIcon: React.FC<IconProps> = ({
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
        d="M39.6 43.9 24.7 29q-1.45 3.45-4.425 5.225Q17.3 36 14 36q-5 0-8.5-3.5T2 24q0-3.3 1.7-6.225t5.15-4.625L4.1 8.4q-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.075-.45t1.075.45l35.5 35.45q.45.45.425 1.075-.025.625-.475 1.075-.45.45-1.05.45-.6 0-1.05-.45Zm5.8-20q0 .3-.1.55-.1.25-.35.5l-5.2 5.2q-.25.25-.475.35-.225.1-.575.1t-.575-.1q-.225-.1-.475-.35L34.5 27l-1.65 1.65-8.35-8.4h17.25q.3 0 .55.1.25.1.5.35l2.15 2.15q.25.25.35.5.1.25.1.55ZM14 30.45q2.7 0 4.425-1.75 1.725-1.75 1.975-3.95l-1.1-1.125q-1.1-1.125-2.45-2.45-1.35-1.325-2.45-2.45L13.3 17.6q-2.2.2-3.975 1.95T7.55 24q0 2.7 1.875 4.575T14 30.45Z"
      />
    </svg>
  );
};
