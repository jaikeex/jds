import React, { useState } from 'react';
import './Menu.styles.scss';
import { Position } from '@core/types';
import { TriggerType } from 'react-popper-tooltip';
import { MenuList } from '@components/MenuList';
import { MenuContextProvider } from './MenuContextProvider';
import { SheetProps } from '@components/Sheet';

export interface MenuProps extends React.PropsWithChildren {
  compact?: boolean;
  defaultOpen?: boolean | undefined;
  maxHeight?: number | string;
  minWidth?: number | string;
  onVisibleChange?: (state: boolean) => void;
  position?: Position;
  sheetProps?: SheetProps;
  trigger?: TriggerType | TriggerType[];
  triggerComponent: React.ReactElement;
}

const Menu: React.FC<MenuProps> = ({
  children = null,
  defaultOpen = undefined,
  position = 'bottom-start',
  triggerComponent,
  ...menuListProps
}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLElement | null>(null);

  const triggerComponentWithProps = React.cloneElement(triggerComponent, {
    ref: setReferenceElement
  });

  return (
    <MenuContextProvider defaultIsOpen={defaultOpen}>
      <div className="jds-menu">
        {triggerComponentWithProps}
        <MenuList
          {...menuListProps}
          position={position}
          referenceElement={referenceElement}
        >
          {children}
        </MenuList>
      </div>
    </MenuContextProvider>
  );
};

export default Menu;
