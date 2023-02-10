import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { MinimizeIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Minimize',
  component: MinimizeIcon
} as ComponentMeta<typeof MinimizeIcon>;

const Template: Story<SvgIconProps> = args => <MinimizeIcon {...args} />;

export const Minimize = Template.bind({});
Minimize.args = {};
