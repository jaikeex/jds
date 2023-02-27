import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import Sheet, { type SheetProps } from './Sheet';

export default {
  title: 'Design System/Sheet',
  component: Sheet
} as ComponentMeta<typeof Sheet>;

const Template: Story<SheetProps> = (args) => (
  <Sheet {...args} style={{ width: '200px', height: '200px' }} />
);

export const Default = Template.bind({});
Default.args = {};

export const SharpCorners = Template.bind({});
SharpCorners.args = {
  sharpCorners: true
};

export const Outlined = Template.bind({});
Outlined.args = {
  level: 2,
  outlined: true
};
