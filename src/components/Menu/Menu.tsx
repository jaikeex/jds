import React, { useState } from 'react';
import type { Position } from 'core/types';
import type { TriggerType } from 'react-popper-tooltip';
import { MenuList } from 'components/MenuList';
import { MenuContextProvider } from './MenuContextProvider';
import type { SheetProps } from 'components/Sheet';
import type { MenuClassKey } from './types';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import clsx from 'clsx';
import { useStyles } from './useStyles';

export interface MenuProps extends React.PropsWithChildren {
  compact?: boolean;
  className?: string;
  classes?: Classes<MenuClassKey>;
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
  className = '',
  classes = {},
  defaultOpen = undefined,
  position = 'bottom-start',
  triggerComponent,
  ...menuListProps
}) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const classNames = mergeClasses(useStyles(), classes);

  const triggerComponentWithProps = React.cloneElement(triggerComponent, {
    ref: setReferenceElement
  });

  return (
    <MenuContextProvider defaultIsOpen={defaultOpen}>
      <div className={clsx(classNames.root, className)}>
        {triggerComponentWithProps}
        <MenuList {...menuListProps} position={position} referenceElement={referenceElement}>
          {children}
        </MenuList>
      </div>
    </MenuContextProvider>
  );
};

export default Menu;
