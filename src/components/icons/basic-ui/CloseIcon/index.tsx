import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const CloseIcon: React.FC<IconProps> = ({
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
      <path d="M24 26.4 13.65 36.75q-.5.5-1.2.5t-1.2-.5q-.5-.5-.5-1.2t.5-1.2L21.6 24 11.25 13.65q-.5-.5-.5-1.2t.5-1.2q.5-.5 1.2-.5t1.2.5L24 21.6l10.35-10.35q.5-.5 1.2-.5t1.2.5q.5.5.5 1.2t-.5 1.2L26.4 24l10.35 10.35q.5.5.5 1.2t-.5 1.2q-.5.5-1.2.5t-1.2-.5Z" />
    </svg>
  );
};
