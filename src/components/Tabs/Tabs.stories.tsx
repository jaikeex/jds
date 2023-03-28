import React, { useState } from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { TabsProps } from './Tabs';
import Tabs from './Tabs';
import type { TabPanelProps } from 'components/Tabs';
import { TabPanel } from 'components/Tabs';
import { Sheet } from 'components/Sheet';
import { Typography } from 'components/Typography';
import { RadioGroup } from 'components/RadioGroup';
import { Radio } from 'components/Radio';

export default {
  title: 'Design System/Tabs',
  component: Tabs,
  parameters: {
    viewMode: 'story'
  }
} as ComponentMeta<typeof Tabs>;

const generateTabPanels = (props: TabPanelProps, amount: number) =>
  Array.from({ length: amount }, (x, i) => i).map((el, i) => (
    <TabPanel {...props} value={`Tab ${i + 1}`} label={`Tab ${i + 1}`} key={el}>
      <Sheet style={{ padding: '2px' }} sharpCorners>
        <Typography variant="h3" textAlign="center" upperCase style={{ marginTop: '3rem' }}>
          Tab {i + 1}
        </Typography>
      </Sheet>
    </TabPanel>
  ));

const Template: Story<TabsProps> = (args) => (
  <div style={{ width: '500px', height: '20rem' }}>
    <Tabs {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: [...generateTabPanels({}, 4)],
  defaultValue: 'Tab 2',
  style: { height: '100%' }
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  ...Default.args,
  divider: true,
  removeHorizontalPadding: true
};

export const JustifiedButtons = Template.bind({});
JustifiedButtons.args = {
  ...Default.args,
  justifyButtons: 'flex-start'
};

export const ScrollableTabs = Template.bind({});
ScrollableTabs.args = {
  ...Default.args,
  children: [...generateTabPanels({}, 8)]
};

export const ScrollButtonsAllwaysVisible = Template.bind({});
ScrollButtonsAllwaysVisible.args = {
  ...Default.args,
  scrollButtons: 'allways',
  children: [...generateTabPanels({}, 8)]
};

export const DisabledTab = Template.bind({});
DisabledTab.args = {
  ...Default.args,
  children: Array.from({ length: 4 }, (x, i) => i).map((el, i) => (
    <TabPanel disabled={i === 3} value={`Tab ${i + 1}`} label={`Tab ${i + 1}`} key={el}>
      <Sheet style={{ padding: '2px' }} sharpCorners>
        <Typography variant="h3" textAlign="center" upperCase style={{ marginTop: '3rem' }}>
          Tab {i + 1}
        </Typography>
      </Sheet>
    </TabPanel>
  ))
};

const ControlledTemplate: Story<TabsProps> = (args) => {
  const [value, setValue] = useState<string>('Tab 1');

  const changeHandler = (value: string) => {
    console.log(value);
  };

  return (
    <React.Fragment>
      <div style={{ width: '500px', display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <RadioGroup
          onChange={(event) => setValue(event.target.value)}
          orientation="horizontal"
          labelPosition="top"
          style={{ gap: '5.5rem' }}
          value={value}
        >
          <Radio key="Tab 1" label="Tab 1" value="Tab 1" />
          <Radio key="Tab 2" label="Tab 2" value="Tab 2" />
          <Radio key="Tab 3" label="Tab 3" value="Tab 3" />
          <Radio key="Tab 4" label="Tab 4" value="Tab 4" />
        </RadioGroup>
      </div>
      <div style={{ width: '500px', height: '20rem' }}>
        <Tabs value={value} {...args} onChange={changeHandler} />
      </div>
    </React.Fragment>
  );
};

export const ControlledTabs = ControlledTemplate.bind({});
ControlledTabs.args = {
  ...Default.args,
  children: Array.from({ length: 4 }, (x, i) => i).map((el, i) => (
    <TabPanel value={`Tab ${i + 1}`} label={`Tab ${i + 1}`} key={el}>
      <Sheet style={{ padding: '2px' }} sharpCorners>
        <Typography variant="h3" textAlign="center" upperCase style={{ marginTop: '3rem' }}>
          Tab {i + 1}
        </Typography>
      </Sheet>
    </TabPanel>
  ))
};
