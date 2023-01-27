import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const StarIcon: React.FC<IconProps> = ({
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
        d="m24 36.9-9.3 5.6q-.5.3-1 .275-.5-.025-.9-.325t-.6-.75q-.2-.45-.1-1l2.5-10.65-8.25-7.15q-.45-.4-.55-.875-.1-.475.05-.975.1-.45.5-.775t.95-.375l10.9-.95 4.2-10q.25-.55.7-.8.45-.25.9-.25t.9.25q.45.25.7.8l4.2 10 10.9.95q.55.05.95.375.4.325.5.775.15.5.05.975-.1.475-.55.875l-8.25 7.15 2.5 10.65q.1.55-.1 1-.2.45-.6.75-.4.3-.9.325-.5.025-1-.275Z"
      />
    </svg>
  );
};
