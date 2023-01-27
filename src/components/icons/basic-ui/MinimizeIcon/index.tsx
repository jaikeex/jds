import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const MinimizeIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m502.627 9.373a32 32 0 0 1 0 45.254l-135.372 135.373h52.673a32 32 0 0 1 0 64h-129.928a32 32 0 0 1 -32-32v-129.928a32 32 0 0 1 64 0v52.674l135.373-135.373a32 32 0 0 1 45.254 0zm-493.254 493.254a32 32 0 0 0 45.254 0l135.373-135.373v52.674a32 32 0 0 0 64 0v-129.928a32 32 0 0 0 -32-32h-129.928a32 32 0 0 0 0 64h52.674l-135.373 135.373a32 32 0 0 0 0 45.254z"
      />
    </svg>
  );
};
