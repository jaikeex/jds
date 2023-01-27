import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const LanguageIcon: React.FC<IconProps> = ({
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
        d="M24 44q-4.2 0-7.85-1.575Q12.5 40.85 9.8 38.15q-2.7-2.7-4.25-6.375Q4 28.1 4 23.9t1.55-7.825Q7.1 12.45 9.8 9.75t6.35-4.225Q19.8 4 24 4q4.2 0 7.85 1.525Q35.5 7.05 38.2 9.75q2.7 2.7 4.25 6.325Q44 19.7 44 23.9t-1.55 7.875Q40.9 35.45 38.2 38.15t-6.35 4.275Q28.2 44 24 44Zm0-2.9q1.75-1.8 2.925-4.125Q28.1 34.65 28.85 31.45H19.2q.7 3 1.875 5.4Q22.25 39.25 24 41.1Zm-4.25-.6q-1.25-1.9-2.15-4.1-.9-2.2-1.5-4.95H8.6Q10.5 35 13 37.025q2.5 2.025 6.75 3.475Zm8.55-.05q3.6-1.15 6.475-3.45 2.875-2.3 4.625-5.55h-7.45q-.65 2.7-1.525 4.9-.875 2.2-2.125 4.1Zm-20.7-12h7.95q-.15-1.35-.175-2.425-.025-1.075-.025-2.125 0-1.25.05-2.225.05-.975.2-2.175h-8q-.35 1.2-.475 2.15T7 23.9q0 1.3.125 2.325.125 1.025.475 2.225Zm11.05 0H29.4q.2-1.55.25-2.525.05-.975.05-2.025 0-1-.05-1.925T29.4 19.5H18.65q-.2 1.55-.25 2.475-.05.925-.05 1.925 0 1.05.05 2.025.05.975.25 2.525Zm13.75 0h8q.35-1.2.475-2.225Q41 25.2 41 23.9q0-1.3-.125-2.25T40.4 19.5h-7.95q.15 1.75.2 2.675.05.925.05 1.725 0 1.1-.075 2.075-.075.975-.225 2.475Zm-.5-11.95h7.5q-1.65-3.45-4.525-5.75Q32 8.45 28.25 7.5q1.25 1.85 2.125 4t1.525 5Zm-12.7 0h9.7q-.55-2.65-1.85-5.125T24 7q-1.6 1.35-2.7 3.55-1.1 2.2-2.1 5.95Zm-10.6 0h7.55q.55-2.7 1.4-4.825.85-2.125 2.15-4.125-3.75.95-6.55 3.2T8.6 16.5Z"
      />
    </svg>
  );
};
