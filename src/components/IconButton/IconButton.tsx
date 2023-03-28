import React, { useCallback } from 'react';
import type { Size, ThemeColorVariantsWithDefault } from 'core/types';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import * as Styled from './styles';

export interface IconButtonProps extends React.PropsWithChildren {
  size?: Size;
  color?: ThemeColorVariantsWithDefault;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  enableRippleEffect?: boolean;
  enableBackground?: boolean;
  className?: string;
  disabled?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      color = 'primary',
      size = 'medium',
      className = '',
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

    const styleProps = {
      color,
      enableBackground,
      disabled,
      size
    };

    const buttonClickHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        enableRippleEffect && enableBackground && createRippleEffect(event);
        onClick(event);
      },
      [enableRippleEffect, createRippleEffect, onClick]
    );

    return (
      <Styled.IconButtonRoot
        {...styleProps}
        disabled={disabled}
        ref={buttonRef}
        className={className}
        style={style}
        onClick={buttonClickHandler}
      >
        {children}
      </Styled.IconButtonRoot>
    );
  }
);

IconButton.displayName = 'IconButton';
export default IconButton;
