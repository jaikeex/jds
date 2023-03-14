import React, { useCallback } from 'react';
import { ListItem } from 'components/ListItem';
import { useMenuContext } from 'components/Menu/MenuContextProvider';
import type { ThemeColorVariantsWithDefault } from 'core/types';

export interface MenuItemProps extends React.PropsWithChildren {
  className?: string;
  compact?: boolean;
  color?: ThemeColorVariantsWithDefault;
  disabled?: boolean;
  divider?: boolean;
  elementAfter?: React.ReactNode;
  elementBefore?: React.ReactNode;
  key?: string | number;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  selected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ children = null, color = 'default', onClick = () => {}, ...props }) => {
  const { setIsOpen } = useMenuContext();

  const clickHandler = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      setIsOpen(false);
      onClick(event);
    },
    [setIsOpen, onClick]
  );

  return (
    <ListItem {...props} color={color} onClick={clickHandler} clickable>
      {children}
    </ListItem>
  );
};

export default MenuItem;
