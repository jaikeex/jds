import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const SearchIcon: React.FC<IconProps> = ({
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
      <path d="m38.55 41.05-12-11.95q-1.45 1.25-3.45 1.95t-4.25.7q-5.5 0-9.325-3.8-3.825-3.8-3.825-9.2 0-5.4 3.825-9.2 3.825-3.8 9.225-3.8 5.4 0 9.2 3.8 3.8 3.8 3.8 9.2 0 2.15-.7 4.15-.7 2-2.05 3.75L41.1 38.6q.5.5.5 1.2t-.55 1.25q-.55.5-1.275.5-.725 0-1.225-.5ZM18.8 28.35q3.95 0 6.725-2.825Q28.3 22.7 28.3 18.75t-2.775-6.775Q22.75 9.15 18.8 9.15q-4.05 0-6.85 2.825t-2.8 6.775q0 3.95 2.8 6.775t6.85 2.825Z" />
    </svg>
  );
};