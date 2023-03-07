import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { WarningIconOutlined } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Warning',
  component: WarningIconOutlined
} as ComponentMeta<typeof WarningIconOutlined>;

const Template: Story<SvgIconProps> = (args) => <WarningIconOutlined {...args} />;

export const Warning = Template.bind({});
Warning.args = {};
