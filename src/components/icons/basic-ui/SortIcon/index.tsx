import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const SortIcon: React.FC<IconProps> = ({
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
        d="M16.5 36.35h-9q-.7 0-1.2-.5t-.5-1.25q0-.7.5-1.175.5-.475 1.2-.475h9q.7 0 1.2.475t.5 1.225q0 .7-.5 1.2t-1.2.5Zm24-21.3h-33q-.7 0-1.2-.475t-.5-1.225q0-.7.5-1.2t1.2-.5h33q.7 0 1.2.5t.5 1.25q0 .7-.5 1.175-.5.475-1.2.475Zm-12 10.65h-21q-.7 0-1.2-.5T5.8 24q0-.75.5-1.225.5-.475 1.2-.475h21q.7 0 1.2.5t.5 1.2q0 .75-.5 1.225-.5.475-1.2.475Z"
      />
    </svg>
  );
};
