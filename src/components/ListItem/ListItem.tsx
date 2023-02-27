import React, { useCallback } from 'react';
import './ListItem.styles.scss';
import classNames from 'classnames';
import { makeId } from '@core/utils';
import { Divider } from '@components/Divider';
import { useForwardedRef, useRippleEffect } from '@core/hooks';
import { useListContext } from '@components/List';
import type { ColorVariants } from '@core/types';

export interface ListItemProps extends React.PropsWithChildren {
  className?: string;
  clickable?: boolean;
  color?: ColorVariants | `#${string}`;
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
    const createRippleEffect = useRippleEffect(innerRef, true);

    const { isCompact } = useListContext();

    const colorClassName = `jds-list-item--color--${color}`;

    const classes = classNames('jds-list-item', className, {
      'jds-list-item--clickable': clickable,
      'jds-list-item--compact': isCompact || compact,
      'jds-list-item--disabled': disabled,
      'jds-list-item--selected': selected,
      [colorClassName]: !color.startsWith('#')
    });

    const getStyles = () => {
      const styles: React.CSSProperties = {
        ...style
      };

      if (color.startsWith('#')) {
        styles.color = color;
      }

      return styles;
    };

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
        <li
          className={classes}
          style={getStyles()}
          key={key}
          ref={innerRef}
          onClick={clickHandler}
        >
          {elementBefore && (
            <div className="jds-list-item__element jds-list-item__element--before">
              {elementBefore}
            </div>
          )}
          {children}
          {elementAfter && (
            <div className="jds-list-item__element jds-list-item__element--after">
              {elementAfter}
            </div>
          )}
        </li>
        {divider && <Divider flexItem />}
      </React.Fragment>
    );
  }
);

export default React.memo(ListItem);
