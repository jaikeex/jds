import React from 'react';
import '@components/icons/styles.scss';
import { FlatIconProps } from '@components/icons/types';
import { getFlatIconClasses } from '@components/icons/utils';

export const TypescriptIcon: React.FC<FlatIconProps> = ({
  size,
  styles,
  testId,
  ariaLabel,
  ...props
}) => {
  const classes = getFlatIconClasses(size);

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
      <rect
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        x="6"
        y="6"
        fill="#1976d2"
      />
      <polygon
        fill="#fff"
        points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
      />
      <path
        fill="#fff"
        d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
      />
    </svg>
  );
};
