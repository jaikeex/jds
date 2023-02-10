import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ExpandIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Expand',
  component: ExpandIcon
} as ComponentMeta<typeof ExpandIcon>;

const Template: Story<SvgIconProps> = args => <ExpandIcon {...args} />;

export const Expand = Template.bind({});
Expand.args = {};
