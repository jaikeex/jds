import React from 'react';
import clsx from 'clsx';
import { mergeClasses } from 'core/utils';
import type { Classes } from 'jss';
import { useStyles } from './useStyles';
import type { TabPanelClassKey } from './types';

export interface TabPanelProps extends React.PropsWithChildren {
  disabled?: boolean;
  label?: string;
  classes?: Classes<TabPanelClassKey>;
  className?: string;
  removeHorizontalPadding?: boolean;
  removeVerticalPadding?: boolean;
  value?: string;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children = null,
  classes = {},
  className = '',
  removeHorizontalPadding = false,
  removeVerticalPadding = false,
  ...props
}) => {
  const classNames = mergeClasses(useStyles({ removeHorizontalPadding, removeVerticalPadding }), classes);

  return <div className={clsx(classNames.root, className)}>{children}</div>;
};

TabPanel.displayName = 'TabPanel';
export default TabPanel;
