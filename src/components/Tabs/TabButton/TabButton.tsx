import React from 'react';
import './TabButton.styles.scss';
import type { ButtonProps } from 'components/Button';
import { Button } from 'components/Button';

export interface TabButtonProps extends React.PropsWithChildren, ButtonProps {
  active?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ active = true, children, ...props }) => {
  //const classes = classNames('jds-tab-button', active && 'jds-tab-button--active');
  console.log('');
  return (
    <Button appearance="subtle" {...props}>
      {children}
    </Button>
  );
};

export default TabButton;
