import React, { useRef, useState } from 'react';
import './ListItem.styles.scss';
import classNames from 'classnames';
import { makeId } from '@core/utils';
import Divider from '../Divider/Divider';
import { useRippleEffect } from '@core/hooks';
import { useListContext } from '../List/ListContextProvider';

export interface ListItemProps {
  children?: React.ReactNode;
  className?: string;
  clickable?: boolean;
  compact?: boolean;
  disabled?: boolean;
  divider?: boolean;
  elementAfter?: React.ReactNode;
  elementBefore?: React.ReactNode;
  itemRef?: React.RefObject<HTMLLIElement>;
  key?: string | number;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  selected?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  className = '',
  clickable = false,
  compact = false,
  disabled = false,
  divider = false,
  elementAfter = null,
  elementBefore = null,
  itemRef = null,
  key = makeId(5),
  onClick = () => {},
  selected = false
}) => {
  const ref = itemRef || useRef(null);
  const createRippleEffect = useRippleEffect(ref, true);

  const { isCompact } = useListContext();

  const classes = classNames('jds-list-item', className, {
    'jds-list-item--clickable': clickable,
    'jds-list-item--compact': isCompact || compact,
    'jds-list-item--disabled': disabled,
    'jds-list-item--selected': selected
  });

  const clickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    if (clickable && !disabled) {
      createRippleEffect(event);
      onClick(event);
    }
  };

  return (
    <React.Fragment>
      <li className={classes} key={key} ref={ref} onClick={clickHandler}>
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
};

export default React.memo(ListItem);
