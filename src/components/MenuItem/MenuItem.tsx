import React from 'react';
import './MenuItem.styles.scss';
import { ListItem } from '@components/ListItem';
import { useMenuContext } from '../Menu/MenuContextProvider';
import { ColorVariants } from '@core/types';

export interface MenuItemProps extends React.PropsWithChildren {
  className?: string;
  compact?: boolean;
  color?: ColorVariants | `#${string}`;
  disabled?: boolean;
  divider?: boolean;
  elementAfter?: React.ReactNode;
  elementBefore?: React.ReactNode;
  key?: string | number;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  selected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children = null,
  color = 'default',
  onClick = () => {},
  ...props
}) => {
  const { setIsOpen } = useMenuContext();

  const clickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    setIsOpen && setIsOpen(false);
    onClick(event);
  };

  return (
    <ListItem {...props} color={color} onClick={clickHandler} clickable>
      {children}
    </ListItem>
  );
};

export default MenuItem;
