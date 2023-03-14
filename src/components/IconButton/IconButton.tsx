import React, { useCallback } from 'react';
import './IconButton.styles.scss';
import type { ThemeColorVariants } from 'core/types';
import type { IconButtonClassKey, IconButtonSize } from './types';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import clsx from 'clsx';

export interface IconButtonProps extends React.PropsWithChildren {
  size?: IconButtonSize;
  color?: ThemeColorVariants;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  enableRippleEffect?: boolean;
  enableBackground?: boolean;
  disableTransform?: boolean;
  className?: string;
  classes?: Classes<IconButtonClassKey>;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      color = 'primary',
      size = 'medium',
      className = '',
      classes = {},
      style = {},
      onClick = () => {},
      enableRippleEffect = false,
      enableBackground = false,
      disableTransform = false,
      children = null
    },
    ref
  ) => {
    const buttonRef = useForwardedRef<HTMLButtonElement>(ref);
    const createRippleEffect = useRippleEffect(buttonRef, { center: true, color: color });
    const classNames = classes
      ? mergeClasses(useStyles({ color, enableBackground, disableTransform }), classes)
      : useStyles({ color, enableBackground, disableTransform });
    console.log(classNames);

    const rootClassNames = clsx(classNames.root, classNames[size], className);

    const buttonClickHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        enableRippleEffect && createRippleEffect(event);
        onClick(event);
      },
      [enableRippleEffect, createRippleEffect, onClick]
    );

    return (
      <button ref={buttonRef} className={rootClassNames} style={style} onClick={buttonClickHandler}>
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
export default IconButton;
