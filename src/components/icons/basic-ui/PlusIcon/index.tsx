import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const PlusIcon: React.FC<IconProps> = ({
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
        d="M24 38.2q-.75 0-1.225-.5-.475-.5-.475-1.2V25.7H11.5q-.7 0-1.2-.5T9.8 24q0-.75.5-1.225.5-.475 1.2-.475h10.8V11.5q0-.7.5-1.2t1.2-.5q.75 0 1.225.5.475.5.475 1.2v10.8h10.8q.7 0 1.2.5t.5 1.2q0 .75-.5 1.225-.5.475-1.2.475H25.7v10.8q0 .7-.5 1.2t-1.2.5Z"
      />
    </svg>
  );
};
