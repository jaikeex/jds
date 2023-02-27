import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { ExpandIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Expand',
  component: ExpandIcon
} as ComponentMeta<typeof ExpandIcon>;

const Template: Story<SvgIconProps> = (args) => <ExpandIcon {...args} />;

export const Expand = Template.bind({});
Expand.args = {};
