import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const ZoomInIcon: React.FC<IconProps> = ({
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
        d="M38.7 40.85 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L40.95 38.7q.45.4.425 1.05-.025.65-.475 1.1-.45.45-1.1.45-.65 0-1.1-.45Zm-19.85-12.3q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Zm-.05-4.25q-.65 0-1.075-.425-.425-.425-.425-1.075v-2.6h-2.65q-.6 0-1.025-.45-.425-.45-.425-1.1 0-.6.425-1.025.425-.425 1.075-.425h2.6v-2.6q0-.6.45-1.025.45-.425 1.1-.425.6 0 1.025.425.425.425.425 1.075v2.55h2.6q.6 0 1.025.45.425.45.425 1.05 0 .65-.425 1.075-.425.425-1.075.425H20.3v2.65q0 .6-.45 1.025-.45.425-1.05.425Z"
      />
    </svg>
  );
};