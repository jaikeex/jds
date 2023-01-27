import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const FinishedIcon: React.FC<IconProps> = ({
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
        d="M11.5 40q-.65 0-1.075-.425Q10 39.15 10 38.5q0-.65.425-1.075Q10.85 37 11.5 37h25q.65 0 1.075.425Q38 37.85 38 38.5q0 .65-.425 1.075Q37.15 40 36.5 40Zm7.5-9.15q-.3 0-.55-.1-.25-.1-.5-.35l-9.2-9.2q-.45-.45-.425-1.05.025-.6.475-1.05.45-.45 1.05-.45.6 0 1.05.45l8.1 8.1L37.15 9.05q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.075t-.45 1.075l-19.2 19.2q-.25.25-.5.35-.25.1-.55.1Z"
      />
    </svg>
  );
};
