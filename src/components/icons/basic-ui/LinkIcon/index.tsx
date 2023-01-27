import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const LinkIcon: React.FC<IconProps> = ({
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
        d="M14 34q-4.25 0-7.125-2.875T4 24q0-4.25 2.875-7.125T14 14h7q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q21.65 17 21 17h-7q-3 0-5 2t-2 5q0 3 2 5t5 2h7q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q21.65 34 21 34Zm3.75-8.5q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075.425-.425 1.075-.425h12.5q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425ZM27 34q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.35 31 27 31h7q3 0 5-2t2-5q0-3-2-5t-5-2h-7q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.35 14 27 14h7q4.25 0 7.125 2.875T44 24q0 4.25-2.875 7.125T34 34Z"
      />
    </svg>
  );
};
