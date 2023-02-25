import React, { useEffect, useState } from 'react';
import './MenuList.styles.scss';
import { Popper } from '@components/Popper';
import { List } from '@components/List';
import { Sheet } from '@components/Sheet';
import { Position } from '@core/types';
import { TriggerType } from 'react-popper-tooltip';
import { useMenuContext } from '../Menu/MenuContextProvider';
import classNames from 'classnames';

export interface MenuListProps extends React.PropsWithChildren {
  onVisibleChange?: (state: boolean) => void;
  className?: string;
  compact?: boolean;
  position?: Position;
  style?: React.CSSProperties;
  trigger?: TriggerType | TriggerType[];
  referenceElement: HTMLElement | null;
}

const MenuList: React.FC<MenuListProps> = ({
  children = null,
  className = '',
  compact = false,
  onVisibleChange = () => {},
  style = {},
  ...popperProps
}) => {
  const { isOpen, setIsOpen } = useMenuContext();

  const classes = classNames('jds-menu-list', className);

  const visibilityChangeHandler = (state: boolean) => {
    setIsOpen && setIsOpen(state);
    onVisibleChange && onVisibleChange(state);
  };

  return (
    <Popper
      isVisible={isOpen}
      offset={[0, 4]}
      onVisibleChange={visibilityChangeHandler}
      delayHide={popperProps.trigger === 'hover' ? 200 : 0}
      {...popperProps}
    >
      <Sheet className={classes} style={style} level={6}>
        <List compact={compact}>{children}</List>
      </Sheet>
    </Popper>
  );
};

export default MenuList;
