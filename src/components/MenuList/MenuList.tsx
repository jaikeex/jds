import React, { useCallback } from 'react';
import { Popper } from '@components/Popper';
import { List } from '@components/List';
import { Sheet, type SheetProps } from '@components/Sheet';
import type { Position } from '@core/types';
import type { TriggerType } from 'react-popper-tooltip';
import { useMenuContext } from '@components/Menu/MenuContextProvider';

export interface MenuListProps extends React.PropsWithChildren {
  onVisibleChange?: (state: boolean) => void;
  compact?: boolean;
  maxHeight?: number | string;
  minWidth?: number | string;
  position?: Position;
  sheetProps?: SheetProps;
  trigger?: TriggerType | TriggerType[];
  referenceElement: HTMLElement | null;
}

const MenuList: React.FC<MenuListProps> = ({
  children = null,
  compact = false,
  maxHeight = undefined,
  minWidth = '100%',
  onVisibleChange = () => {},
  sheetProps = {},
  ...popperProps
}) => {
  const { isOpen, setIsOpen } = useMenuContext();

  const getStyles = () => {
    const styles = { ...sheetProps.style };

    if (maxHeight != undefined) {
      styles.maxHeight =
        typeof maxHeight === 'string' ? maxHeight : `${maxHeight}px`;
      styles.overflowY = 'auto';
    }

    styles.minWidth = typeof minWidth === 'string' ? minWidth : `${minWidth}px`;
    return styles;
  };

  const visibilityChangeHandler = useCallback(
    (state: boolean) => {
      setIsOpen(state);
      onVisibleChange(state);
    },
    [setIsOpen, onVisibleChange]
  );

  return (
    <Popper
      isVisible={isOpen}
      offset={[0, 4]}
      onVisibleChange={visibilityChangeHandler}
      delayHide={popperProps.trigger === 'hover' ? 200 : 0}
      {...popperProps}
    >
      <Sheet {...sheetProps} style={getStyles()} level={6}>
        <List compact={compact}>{children}</List>
      </Sheet>
    </Popper>
  );
};

export default MenuList;
