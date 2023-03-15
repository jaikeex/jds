import React from 'react';
import type { ButtonProps } from 'components/Button';
import { Button } from 'components/Button';
import { useStyles } from './useStyles';
import clsx from 'clsx';

export interface TabButtonProps extends React.PropsWithChildren, ButtonProps {
  active?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ active = true, children, ...props }) => {
  const classNames = useStyles();

  return (
    <Button appearance="subtle" {...props} className={clsx(classNames.root, active && classNames.active)}>
      {children}
    </Button>
  );
};

export default TabButton;
