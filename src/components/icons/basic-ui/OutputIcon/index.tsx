import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const OutputIcon: React.FC<IconProps> = ({
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
        d="M9 42q-1.25 0-2.125-.875T6 39V9q0-1.25.875-2.125T9 6h30q1.25 0 2.125.875T42 9v3q0 .65-.425 1.075-.425.425-1.075.425-.65 0-1.075-.425Q39 12.65 39 12V9H9v30h30v-3q0-.65.425-1.075.425-.425 1.075-.425.65 0 1.075.425Q42 35.35 42 36v3q0 1.25-.875 2.125T39 42Zm29.2-16.5H20.65q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q20 22.5 20.65 22.5H38.2l-4.6-4.65q-.4-.45-.425-1.05-.025-.6.425-1.05.45-.45 1.05-.45.6 0 1.05.45l7.2 7.2q.45.45.45 1.05 0 .6-.45 1.05l-7.2 7.2q-.45.45-1.05.45-.6 0-1.05-.45-.45-.45-.425-1.05.025-.6.425-1.05Z"
      />
    </svg>
  );
};
