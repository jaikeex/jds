import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const SearchCheckIcon: React.FC<IconProps> = ({
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
        d="m17.85 19.4 3.95-3.95q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.075T23.9 17.6l-5.25 5.25q-.35.35-.8.35-.45 0-.8-.35L14.1 19.9q-.45-.45-.45-1.075t.45-1.075q.45-.45 1.05-.45.6 0 1.05.45ZM40.9 40.85q-.45.45-1.1.45-.65 0-1.1-.45L26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75l12.1 12q.15.15-.1.775t-.475 1.2q-.225.575-.2.775.025.2.775-.55Zm-22.05-12.3q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"
      />
    </svg>
  );
};
