import React from 'react';
import './Navigation.styles.scss';

export interface NavigationProps {
  children?: React.ReactNode;
  className?: string;
  orientatnion?: 'horizontal' | 'vertical';
  uppercase?: boolean;
}

const Navigation: React.FC<NavigationProps> = props => {
  return <div></div>;
};

export default Navigation;
