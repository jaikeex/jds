import React from 'react';
import './Menu.styles.scss';

export interface MenuProps {
  autoFocus?: boolean;
  children?: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  onClose?: React.EventHandler<React.SyntheticEvent>;
  onOpen?: React.EventHandler<React.SyntheticEvent>;
  open?: boolean;
  variant?: string;
}

const Menu: React.FC<MenuProps> = props => {
  return <div></div>;
};

export default Menu;
