import React, { useState } from 'react';
import './Menu.styles.scss';
import { Position } from '@core/types';
import { TriggerType } from 'react-popper-tooltip';
import { MenuList } from '@components/MenuList';
import { MenuContextProvider } from './MenuContextProvider';

export interface MenuProps extends React.PropsWithChildren {
  className?: string;
  compact?: boolean;
  defaultOpen?: boolean | undefined;
  maxHeight?: number | string;
  minWidth?: number | string;
  onVisibleChange?: (state: boolean) => void;
  position?: Position;
  style?: React.CSSProperties;
  trigger?: TriggerType | TriggerType[];
  triggerComponent: React.ReactElement;
}

const Menu: React.FC<MenuProps> = ({
  children = null,
  defaultOpen = undefined,
  maxHeight = undefined,
  minWidth = '100%',
  position = 'bottom-start',
  style = {},
  triggerComponent,
  ...menuListProps
}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLElement | null>(null);

  const triggerComponentWithProps = React.cloneElement(triggerComponent, {
    ref: setReferenceElement
  });

  const styles = () => {
    const styles = { ...style };

    if (maxHeight) {
      styles.maxHeight =
        typeof maxHeight === 'string' ? maxHeight : `${maxHeight}px`;
      styles.overflowY = 'auto';
    }

    styles.minWidth = typeof minWidth === 'string' ? minWidth : `${minWidth}px`;
    return styles;
  };

  return (
    <MenuContextProvider defaultIsOpen={defaultOpen}>
      <div className="jds-menu">
        {triggerComponentWithProps}
        <MenuList
          {...menuListProps}
          position={position}
          referenceElement={referenceElement}
          style={styles()}
        >
          {children}
        </MenuList>
      </div>
    </MenuContextProvider>
  );
};

export default Menu;
