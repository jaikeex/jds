import React from 'react';
import { Popper } from '@components/Popper';
import { List } from '@components/List';
import { Sheet, SheetProps } from '@components/Sheet';
import { Position } from '@core/types';
import { TriggerType } from 'react-popper-tooltip';
import { useMenuContext } from '../Menu/MenuContextProvider';

export interface MenuListProps extends React.PropsWithChildren {
  onVisibleChange?: (state: boolean) => void;
  compact?: boolean;
  maxHeight?: number | string;
  minWidth?: number | string;
  position?: Position;
  sheetProps?: SheetProps;
  style?: React.CSSProperties;
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
  style = {},
  ...popperProps
}) => {
  const { isOpen, setIsOpen } = useMenuContext();

  const getStyles = () => {
    const styles = { ...sheetProps.style };

    if (maxHeight) {
      styles.maxHeight =
        typeof maxHeight === 'string' ? maxHeight : `${maxHeight}px`;
      styles.overflowY = 'auto';
    }

    styles.minWidth = typeof minWidth === 'string' ? minWidth : `${minWidth}px`;
    return styles;
  };

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
      <Sheet {...sheetProps} style={getStyles()} level={6}>
        <List compact={compact}>{children}</List>
      </Sheet>
    </Popper>
  );
};

export default MenuList;
