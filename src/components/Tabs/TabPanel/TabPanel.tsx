import React from 'react';
import clsx from 'clsx';
import { mergeClasses } from 'core/utils';
import type { Classes } from 'jss';
import { useStyles } from './useStyles';
import type { TabPanelClassKey } from './types';

export interface TabPanelProps extends React.PropsWithChildren {
  // disabled?: boolean;
  // label: string;
  classes?: Classes<TabPanelClassKey>;
  className?: '';
  removeHorizontalPadding?: boolean;
  removeVerticalPadding?: boolean;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  // disabled = false,
  // label = '',
  classes = {},
  className = '',
  removeHorizontalPadding = false,
  removeVerticalPadding = false
}) => {
  const classNames = mergeClasses(useStyles({ removeHorizontalPadding, removeVerticalPadding }), classes);

  return <div className={clsx(classNames.root, className)}>{children}</div>;
};

export default TabPanel;
