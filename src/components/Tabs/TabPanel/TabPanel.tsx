import classNames from 'classnames';
import React from 'react';
import './TabPanel.styles.scss';

export interface TabPanelProps extends React.PropsWithChildren {
  disabled?: boolean;
  label: string;
  removeHorizontalPadding?: boolean;
  removeVerticalPadding?: boolean;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  disabled = false,
  label = '',
  removeHorizontalPadding = false,
  removeVerticalPadding = false
}) => {
  const classes = classNames('jds-tab', {
    'jds-tab--px-0': removeHorizontalPadding,
    'jds-tab--py-0': removeVerticalPadding
  });

  return <div className={classes}>{children}</div>;
};

export default TabPanel;
