import React, { useEffect, useState } from 'react';
import type { TabPanelProps } from 'components/Tabs/TabPanel';
import { useTabsContext } from 'components/Tabs/TabsContextProvider';
import * as Styled from './styles';

export interface TabPanelsContainerProps extends React.PropsWithChildren {
  value?: string | null;
}

const TabPanelsContainer: React.FC<TabPanelsContainerProps> = ({ children = [], value = '' }): JSX.Element => {
  const { activeTab, setActiveTab } = useTabsContext();
  const [activeTabComponent, setActiveTabComponent] = useState<React.ReactNode | null>(null);

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

    setActiveTabComponent(tab);
  }, [activeTab]);

  useEffect(() => {
    if (value && value !== activeTab) {
      setActiveTab(value);
    }
  }, [value]);

  return <Styled.TabPanelContainer>{activeTabComponent}</Styled.TabPanelContainer>;
};

TabPanelsContainer.displayName = 'TabPanelsContainer';
export default TabPanelsContainer;
