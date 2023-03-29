import * as React from 'react';
import type { TabButtonProps } from './TabButton';
import type { TabPanelProps } from './TabPanel';

export const useDistributedProps = (children: React.ReactNode | null, props: TabPanelProps) => {
  if (!children) {
    return { tabValues: [], tabButtonProps: [] };
  }

  const tabButtonProps: TabButtonProps[] = [];

  const tabPanelProps = React.Children.map(
    children as React.ReactElement[],
    (child: React.ReactElement<TabPanelProps>, index) => {
      if (React.isValidElement(child)) {
        const { value, disabled, label } = child.props;
        const tabValue = value || index.toString();
        tabButtonProps.push({ value: tabValue, label, disabled });
        return React.cloneElement(child, { value: tabValue, ...props });
      }
    }
  );

  return { tabButtonProps, tabPanelProps };
};
