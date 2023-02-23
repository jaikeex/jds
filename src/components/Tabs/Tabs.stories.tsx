import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Tabs, { TabsProps } from './Tabs';
import { TabPanel } from '@components/Tabs';
import { Sheet } from '../Sheet';

export default {
  title: 'Design System/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: Story<TabsProps> = args => {
  return (
    <div style={{ width: '500px' }}>
      <Tabs {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: [
    <TabPanel label="Tab 1">
      <Sheet>Tab 1</Sheet>
    </TabPanel>,
    <TabPanel label="Tab 2">
      <Sheet>Tab 2</Sheet>
    </TabPanel>,
    <TabPanel label="Tab 3">
      <Sheet>Tab 3</Sheet>
    </TabPanel>,
    <TabPanel label="Tab 4">
      <Sheet>Tab 4</Sheet>
    </TabPanel>
  ]
};
