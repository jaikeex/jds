import React, { useCallback } from 'react';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import type { IconButtonClassKey, IconButtonSize } from './types';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import clsx from 'clsx';

export interface IconButtonProps extends React.PropsWithChildren {
  size?: IconButtonSize;
  color?: ThemeColorVariantsWithDefault;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  enableRippleEffect?: boolean;
  enableBackground?: boolean;
  className?: string;
  classes?: Classes<IconButtonClassKey>;
  disabled?: boolean;
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
      children = null,
      disabled = false
    },
    ref
  ) => {
    const buttonRef = useForwardedRef<HTMLButtonElement>(ref);
    const createRippleEffect = useRippleEffect(buttonRef, { center: true, color: color, animationTime: 400 });
    const classNames = mergeClasses(useStyles({ color, enableBackground, disabled }), classes);

    const rootClassNames = clsx(classNames.root, classNames[size], disabled && classNames.disabled, className);

    const buttonClickHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        enableRippleEffect && enableBackground && createRippleEffect(event);
        onClick(event);
      },
      [enableRippleEffect, createRippleEffect, onClick]
    );

    return (
      <button disabled={disabled} ref={buttonRef} className={rootClassNames} style={style} onClick={buttonClickHandler}>
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
export default IconButton;
