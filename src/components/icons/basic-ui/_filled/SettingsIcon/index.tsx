import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const SettingsIcon: React.FC<IconProps> = ({
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
      <path d="M27.35 44.3h-6.7q-.65 0-1.15-.4-.5-.4-.6-1.05l-.8-4.95q-.85-.3-1.85-.875T14.5 35.85l-4.55 2.1q-.6.3-1.25.1-.65-.2-.95-.8l-3.4-6.05q-.35-.55-.175-1.175T4.85 29l4.25-3.1q-.1-.4-.125-.95-.025-.55-.025-.95 0-.4.025-.95.025-.55.125-.95L4.85 19q-.5-.4-.675-1.025Q4 17.35 4.35 16.8l3.4-6.05q.35-.6.975-.8.625-.2 1.225.1l4.6 2.1q.7-.6 1.7-1.15 1-.55 1.85-.85l.8-5.05q.1-.6.6-1t1.15-.4h6.7q.65 0 1.15.4.5.4.6 1l.8 5q.85.35 1.875.875T33.5 12.15l4.55-2.1q.6-.3 1.25-.1.65.2.95.8l3.4 6q.35.55.2 1.2-.15.65-.7 1.05l-4.25 3q.1.45.125 1 .025.55.025 1 0 .45-.025.975-.025.525-.125.975L43.15 29q.5.4.675 1.025.175.625-.175 1.175l-3.4 6.05q-.35.6-.975.8-.625.2-1.225-.1l-4.6-2.1q-.7.6-1.675 1.2-.975.6-1.875.85l-.8 4.95q-.1.65-.6 1.05t-1.15.4ZM24 30.5q2.7 0 4.6-1.9 1.9-1.9 1.9-4.6 0-2.7-1.9-4.6-1.9-1.9-4.6-1.9-2.7 0-4.6 1.9-1.9 1.9-1.9 4.6 0 2.7 1.9 4.6 1.9 1.9 4.6 1.9Z" />
    </svg>
  );
};