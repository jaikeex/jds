import * as React from 'react';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import type { ToggleButtonClassKey, ToggleButtonSize } from './types';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import { Typography } from 'components/Typography';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import { useCallback, useEffect, useState } from 'react';

export interface ToggleButtonProps extends React.PropsWithChildren {
  className?: string;
  classes?: Classes<ToggleButtonClassKey>;
  color?: ThemeColorVariantsWithDefault;
  disabled?: boolean;
  disableRippleEffect?: boolean;
  disableUpperCase?: boolean;
  onChange?: (selected: boolean, value?: any) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, value?: any) => void;
  removeBorder?: boolean;
  selected?: boolean;
  size?: ToggleButtonSize;
  style?: React.CSSProperties;
  value?: any;
}

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (
    {
      children = null,
      className = '',
      classes = {},
      color = 'default',
      disabled = false,
      disableRippleEffect = false,
      disableUpperCase = false,
      onChange = () => {},
      onClick = () => {},
      removeBorder = false,
      selected = false,
      size = 'medium',
      style = {},
      value = undefined
    },
    ref
  ): JSX.Element => {
    const buttonRef = useForwardedRef<HTMLButtonElement>(ref);
    const createRippleEffect = useRippleEffect(buttonRef, { color: color, animationTime: 400 });
    const [active, setActive] = useState<boolean>(selected);

    const classNames = mergeClasses(useStyles({ color, removeBorder }), classes);
    const rootClasses = clsx(
      classNames.root,
      classNames[size],
      active && classNames.active,
      disabled && classNames.disabled,
      className
    );

    const buttonClickHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        disableRippleEffect || disabled || createRippleEffect(event);
        setActive((prevState) => !prevState);
        onClick(event, value);
      },
      [setActive, disableRippleEffect, createRippleEffect, onClick]
    );

    const getChildren = useCallback(() => {
      if (typeof children === 'string') {
        return (
          <Typography variant="button" upperCase={disableUpperCase ? false : true} className={classNames.text}>
            {children}
          </Typography>
        );
      } else {
        return children;
      }
    }, [children, disableUpperCase, classNames]);

    useEffect(() => {
      onChange(active, value);
    }, [active]);

    useEffect(() => {
      setActive(selected);
    }, [selected]);

    return (
      <button ref={buttonRef} className={rootClasses} style={style} onClick={buttonClickHandler} disabled={disabled}>
        {getChildren()}
      </button>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';
export default ToggleButton;
