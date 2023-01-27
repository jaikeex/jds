import React from 'react';
import '@components/icons/styles.scss';
import { IconProps } from '@components/icons/types';
import { getIconClasses } from '@components/icons/utils';

export const SwapHorizontalIcon: React.FC<IconProps> = ({
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
        d="M33.3 26.25q-.45-.45-.45-1.05 0-.6.45-1.05l5-5H24q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075.425-.425 1.075-.425h14.3l-5.05-5.05q-.45-.45-.425-1.025.025-.575.475-1.025.45-.45 1.05-.45.6 0 1.05.45l7.55 7.55q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-7.6 7.6q-.45.45-1.025.425-.575-.025-1.025-.475Zm-20.7 12.7L5.05 31.4q-.25-.25-.35-.5-.1-.25-.1-.55 0-.3.1-.55.1-.25.35-.5l7.6-7.6q.45-.45 1.025-.425.575.025 1.025.475.45.45.45 1.05 0 .6-.45 1.05l-5 5H24q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H9.7l5.05 5.05q.45.45.425 1.025-.025.575-.475 1.025-.45.45-1.05.45-.6 0-1.05-.45Z"
      />
    </svg>
  );
};
