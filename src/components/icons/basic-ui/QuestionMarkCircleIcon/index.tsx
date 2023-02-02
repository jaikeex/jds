import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const QuestionMarkCircleIcon: React.FC<IconProps> = ({
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
        d="M24.2 35.65q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35t-1.35-.55q-.8 0-1.35.55t-.55 1.35q0 .8.55 1.35t1.35.55ZM24.15 15q1.7 0 2.75.925t1.05 2.375q0 1-.6 1.975-.6.975-1.95 2.125-1.3 1.15-2.075 2.425-.775 1.275-.775 2.325 0 .55.425.875.425.325.975.325.6 0 1-.4t.5-1q.15-1 .675-1.775.525-.775 1.625-1.675 1.5-1.25 2.175-2.5.675-1.25.675-2.8 0-2.65-1.725-4.25t-4.575-1.6q-1.9 0-3.5.75t-2.65 2.2q-.4.55-.325 1.125.075.575.475.875.55.4 1.175.25.625-.15 1.025-.7.65-.9 1.575-1.375Q23 15 24.15 15ZM24 44q-4.2 0-7.85-1.525Q12.5 40.95 9.8 38.25q-2.7-2.7-4.25-6.35Q4 28.25 4 24q0-4.2 1.55-7.85Q7.1 12.5 9.8 9.8q2.7-2.7 6.35-4.25Q19.8 4 24 4q4.15 0 7.8 1.55 3.65 1.55 6.35 4.25 2.7 2.7 4.275 6.35Q44 19.8 44 24q0 4.25-1.575 7.9-1.575 3.65-4.275 6.35-2.7 2.7-6.35 4.225Q28.15 44 24 44Z"
      />
    </svg>
  );
};