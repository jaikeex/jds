import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const AddUserGroupIcon: React.FC<IconProps> = ({
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
        d="M23.7 23.7q1.3-1.6 1.925-3.3.625-1.7.625-3.95t-.625-3.95Q25 10.8 23.7 9.2q3.8-.85 6.675 1.15t2.875 6.1q0 4.1-2.875 6.1T23.7 23.7ZM33.4 40q.5-.1.8-.525.3-.425.3-1.075v-3.1q0-2.55-1.3-4.75t-4.5-3.7q8.65 1.1 11.825 3.2 3.175 2.1 3.175 5.25v3.2q0 .65-.425 1.075Q42.85 40 42.2 40Zm8.1-14.45q-.65 0-1.075-.425Q40 24.7 40 24.05v-3.5h-3.5q-.65 0-1.075-.425Q35 19.7 35 19.05q0-.65.425-1.075.425-.425 1.075-.425H40v-3.5q0-.65.425-1.075.425-.425 1.075-.425.65 0 1.075.425Q43 13.4 43 14.05v3.5h3.5q.65 0 1.075.425Q48 18.4 48 19.05q0 .65-.425 1.075-.425.425-1.075.425H43v3.5q0 .65-.425 1.075-.425.425-1.075.425Zm-25.75-1.6q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM1.5 40q-.65 0-1.075-.425Q0 39.15 0 38.5v-3.2q0-1.75.925-3.175Q1.85 30.7 3.4 30q3.6-1.6 6.425-2.3 2.825-.7 5.925-.7 3.1 0 5.9.7 2.8.7 6.4 2.3 1.55.7 2.5 2.125t.95 3.175v3.2q0 .65-.425 1.075Q30.65 40 30 40Z"
      />
    </svg>
  );
};