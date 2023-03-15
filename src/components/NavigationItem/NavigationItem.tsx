import React from 'react';

export interface NavigationItemProps extends React.PropsWithChildren {
  className: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ className = '' }) => {
  console.log('Hello World');
  return <div className={className}>Hello World</div>;
};

export default NavigationItem;
