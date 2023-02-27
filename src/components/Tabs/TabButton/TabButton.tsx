import React from 'react';
import './TabButton.styles.scss';
import type { ButtonProps } from '@components/Button';
import { Button } from '@components/Button';
import classNames from 'classnames';

export interface TabButtonProps extends React.PropsWithChildren, ButtonProps {
  active?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({
  active = true,
  children,
  ...props
}) => {
  const classes = classNames(
    'jds-tab-button',
    active && 'jds-tab-button--active'
  );

  return (
    <Button appearance="subtle" className={classes} {...props}>
      {children}
    </Button>
  );
};

export default TabButton;
