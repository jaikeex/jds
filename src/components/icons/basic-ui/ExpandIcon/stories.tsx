import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ExpandIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Expand',
  component: ExpandIcon
} as ComponentMeta<typeof ExpandIcon>;

const Template: Story<IconProps> = args => <ExpandIcon {...args} />;

export const Expand = Template.bind({});
Expand.args = {};
