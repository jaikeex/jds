import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { TabsProps } from './Tabs';
import Tabs from './Tabs';
import type { TabPanelProps } from '@components/Tabs';
import { TabPanel } from '@components/Tabs';
import { Sheet } from '@components/Sheet';

export default {
  title: 'Design System/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const generateTabPanels = (props: TabPanelProps, amount: number) =>
  Array.from({ length: amount }, (x, i) => i).map((el, i) => (
    <TabPanel {...props} key={el}>
      <Sheet>Tab {i + 1}</Sheet>
    </TabPanel>
  ));

const Template: Story<TabsProps> = (args) => (
  <div style={{ width: '500px' }}>
    <Tabs {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: generateTabPanels({}, 4)
};
