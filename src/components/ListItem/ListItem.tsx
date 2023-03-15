import React, { useCallback } from 'react';
import { makeId, mergeClasses } from 'core/utils';
import { Divider } from 'components/Divider';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import { useListContext } from 'components/List';
import type { ListItemClassKey } from './types';
import type { Classes } from 'jss';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import type { ThemeColorVariantsWithDefault } from 'core/types';

export interface ListItemProps extends React.PropsWithChildren {
  className?: string;
  classes?: Classes<ListItemClassKey>;
  clickable?: boolean;
  color?: ThemeColorVariantsWithDefault;
  compact?: boolean;
  disabled?: boolean;
  divider?: boolean;
  elementAfter?: React.ReactNode;
  elementBefore?: React.ReactNode;
  key?: string | number;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  selected?: boolean;
  style?: React.CSSProperties;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      children = null,
      className = '',
      classes = {},
      clickable = false,
      color = 'default',
      compact = false,
      disabled = false,
      divider = false,
      elementAfter = null,
      elementBefore = null,
      key = makeId(5),
      onClick = () => {},
      selected = false,
      style = {}
    },
    ref
  ) => {
    const innerRef = useForwardedRef<HTMLLIElement>(ref);
    const createRippleEffect = useRippleEffect(innerRef, { color: color, animationTime: 700 });

    const { isCompact } = useListContext();
    const classNames = mergeClasses(useStyles({ color }), classes);

    const rootClasses = clsx(
      classNames.root,
      clickable && classNames.clickable,
      isCompact || compact ? classNames.compact : classNames.wide,
      disabled && classNames.disabled,
      selected && classNames.selected,
      className
    );

    const clickHandler = useCallback(
      (event: React.MouseEvent<HTMLLIElement>) => {
        if (clickable && !disabled) {
          createRippleEffect(event);
          onClick(event);
        }
      },
      [createRippleEffect, onclose, clickable, disabled]
    );

    return (
      <React.Fragment>
        <li className={rootClasses} style={style} key={key} ref={innerRef} onClick={clickHandler}>
          {elementBefore && <div className={classNames.element}>{elementBefore}</div>}
          <div className={classNames.children}>{children}</div>
          {elementAfter && <div className={classNames.element}>{elementAfter}</div>}
        </li>
        {divider && <Divider flexItem />}
      </React.Fragment>
    );
  }
);

export default ListItem;
