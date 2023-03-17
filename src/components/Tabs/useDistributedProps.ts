import type { Classes } from 'jss';
import React from 'react';
import type { TabButtonProps } from './TabButton';
import type { TabPanelProps } from './TabPanel';
import type { TabsClassKey } from './types';

export const useDistributedProps = (
  children: React.ReactElement | React.ReactElement[] | null,
  classNames: Classes<TabsClassKey>,
  props: TabPanelProps
) => {
  if (!children) {
    return { tabValues: [], tabButtonProps: [] };
  }

  const tabButtonProps: TabButtonProps[] = [];

  const tabPanelProps = React.Children.map(children, (child: React.ReactElement<TabPanelProps>, index) => {
    if (React.isValidElement(child)) {
      const { value, disabled, label } = child.props;
      const tabValue = value || index.toString();
      tabButtonProps.push({ value: tabValue, label, disabled });
      return React.cloneElement(child, { className: classNames.tabPanel, value: tabValue, ...props });
    }
  });

  return { tabButtonProps, tabPanelProps };
};
