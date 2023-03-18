import React, { useEffect, useState } from 'react';
import type { TabPanelProps } from 'components/Tabs/TabPanel';
import { useTabsContext } from 'components/Tabs/TabsContextProvider';
import { useStyles } from './useStyles';

export interface TabPanelsContainerProps extends React.PropsWithChildren {
  value?: string | null;
}

const TabPanelsContainer: React.FC<TabPanelsContainerProps> = ({ children = [], value = '' }): JSX.Element => {
  const { activeTab, setActiveTab } = useTabsContext();
  const [activeTabComponent, setActiveTabComponent] = useState<React.ReactNode | null>(null);

  const classNames = useStyles();

  useEffect(() => {
    if (!Array.isArray(children)) {
      setActiveTabComponent(children);
      return;
    }

    let tab: React.ReactElement = children[0];

    React.Children.forEach(children, (child: React.ReactElement<TabPanelProps>) => {
      if (child.props.value === activeTab) {
        tab = child;
      }
    });

    setActiveTab(tab.props.value);
    setActiveTabComponent(tab);
  }, [activeTab, setActiveTab]);

  useEffect(() => {
    value && setActiveTab(value);
  }, [value]);

  return <div className={classNames.root}>{activeTabComponent}</div>;
};

TabPanelsContainer.displayName = 'TabPanelsContainer';
export default TabPanelsContainer;
