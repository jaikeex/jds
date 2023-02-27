import React from 'react';
import './Navigation.styles.scss';

export interface NavigationProps {
  children?: React.ReactNode;
  className?: string;
  orientatnion?: 'horizontal' | 'vertical';
}

const Navigation: React.FC<NavigationProps> = ({
  children = null,
  className = '',
  orientatnion = 'horizontal'
}) => {
  console.log(orientatnion);
  return <div className={className}> {children} </div>;
};

export default Navigation;
